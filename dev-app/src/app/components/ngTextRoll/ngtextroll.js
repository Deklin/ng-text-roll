/*jshint bitwise: false*/

(function() {

  'use strict';

  /**
   * @ngdoc component
   * @name ui.ng-text-roll.component:ngTextRoll
   * @description
   * # ngTextRoll
   */

  angular.module('ui.ngTextRoll', [])
    .controller('ngTextRollCtrl', function($timeout, ngTextRollSvc) {
      var ctrl = this;

      // local vars
      ctrl.current = 0;
      ctrl.render = [{}, {}];
      // Constants
      ctrl.zero = '0';
      ctrl.transTemplate = 'top Xs ease-in-out';
      ctrl.transRegex = /X/;
      ctrl.tumbleMs = { // range of milliseconds for random tumble effect
        min: 0.3,
        max: 0.8
      };

      ctrl.$onInit = function() {
        ctrl.svc = ngTextRollSvc; // simplify bindings
        ctrl.svc.validate(ctrl);
        ctrl.svc.init(ctrl);
      };

      ctrl.$onDestroy = function() { // clean up timer (set with service)
        $timeout.cancel(ctrl.animTimeout);
      };

      ctrl.$onChanges = function(obj) {
        if (obj.target) {
          ngTextRollSvc.roll(ctrl, obj.target.previousValue, obj.target.currentValue);
        }
      };

    })
    .factory('ngTextRollSvc', function($timeout, $filter) {
      var svc = {};

      /* Utility methods */

      var formatTarget = function(cfg, target) {
        return (cfg && cfg.filter) ? $filter(cfg.filter)(target, cfg.filterParams) : String(target);
      };

      var randDec = function(min, max) {
        return parseFloat((Math.random() * (max - min) + min).toFixed(2));
      };

      var trans = function(ctrl) {
        return ctrl.transTemplate.replace(ctrl.transRegex,
          randDec(ctrl.tumbleMs.min, ctrl.tumbleMs.max));
      };

      var charDiff = function(ctrl, inx) {
        return ctrl.render[ctrl.current].target[inx] === ctrl.render[ctrl.notCurrent].target[inx];
      };

      // Check incoming values and update/warn accordingly
      svc.validate = function(ctrl) {
        if (!ctrl.height) {
          var defaultHeight = '1em';
          console.warn('ngTextRoll: height not specified, defaulting to \'' + defaultHeight + '\'');
          ctrl.height = defaultHeight;
        }
        if (!ctrl.target) {
          console.error('ngTextRoll: target not specified');
          ctrl.target = 'ngTextRoll error';
        }
        if (ctrl.config && ctrl.config.filter) {
          try {
            $filter(ctrl.config.filter);
          } catch (e) {
            ctrl.config.filter = '';
            console.warn('ngTextRoll: config.filter incorrectly specified; disabling');
          }
        }
      };

      // Initialize values and setup value defaults
      svc.init = function(ctrl) {
        var valueHeight = parseFloat(ctrl.height);
        var unitHeight = ctrl.height.replace(valueHeight, '');
        var offset = valueHeight * 0.5; // ensure pre-animation divs are out of sight
        ctrl.topAbove = ((valueHeight + offset) * -1) + unitHeight;
        ctrl.topBelow = (valueHeight + offset) + unitHeight;

        ctrl.render[ctrl.current].style = { // set initial render
          'top': ctrl.zero
        };
        ctrl.config = ctrl.config || {}; // ensure config is not null
        ctrl.render[ctrl.current].target = formatTarget(ctrl.config, ctrl.target);
      };

      // Move pre-animation divs without animations
      var animSetup = function(ctrl, oldVal, newVal, isIncrease) {
        ctrl.render[ctrl.current].style = [];
        angular.forEach(ctrl.render[ctrl.current].target, function() {
          ctrl.render[ctrl.current].style.push({
            '-webkit-transition': undefined,
            '-moz-transition': undefined,
            'transition': undefined,
            'top': isIncrease ? ctrl.topBelow : ctrl.topAbove
          });
        });

        ctrl.render[ctrl.notCurrent].style = [];
        angular.forEach(ctrl.render[ctrl.notCurrent].target, function() {
          ctrl.render[ctrl.notCurrent].style.push({
            '-webkit-transition': undefined,
            '-moz-transition': undefined,
            'transition': undefined,
            'top': ctrl.zero
          });
        });
      };

      // Enable animations on divs and animate
      var animate = function(ctrl, isIncrease, lengthDiffers) {
        angular.forEach(ctrl.render[ctrl.current].style, function(s, inx) {
          if (!charDiff(ctrl, inx)) {
            var tran = trans(ctrl);
            s['-webkit-transition'] = tran;
            s['-moz-transition'] = tran;
            s.transition = tran;
            s.top = ctrl.zero;
          }
        });

        angular.forEach(ctrl.render[ctrl.notCurrent].style, function(s, inx) {
          if (!charDiff(ctrl, inx)) {
            var tran = trans(ctrl);
            s['-webkit-transition'] = tran;
            s['-moz-transition'] = tran;
            s.transition = tran;
            s.top = isIncrease ? ctrl.topAbove : ctrl.topBelow;
            if (lengthDiffers) {
              s['-webkit-filter'] = 'blur(5px)';
              s.filter = 'blur(5px)';
            }
          }
        });
      };

      // Set strings, setup, animate
      svc.roll = function(ctrl, oldVal, newVal) {
        var isIncrease = newVal > oldVal;
        ctrl.notCurrent = ctrl.current;
        ctrl.current = ctrl.current ^ 1;
        ctrl.render[ctrl.current].target = formatTarget(ctrl.config, newVal);
        ctrl.render[ctrl.notCurrent].target = formatTarget(ctrl.config, oldVal);
        var lengthDiffers = (ctrl.render[ctrl.current].target.length !== ctrl.render[ctrl.notCurrent].target.length);
        animSetup(ctrl, oldVal, newVal, isIncrease, lengthDiffers);
        // A delay is needed to achieve the desired effect
        //  NOTE: Firefox required at least 25ms delay
        ctrl.animTimeout = $timeout(animate, 25, true, ctrl, isIncrease, lengthDiffers);
      };

      return svc;
    })
    .component('ngTextRoll', {
      templateUrl: 'app/components/ngTextRoll/ngtextroll.html',
      bindings: {
        target: '<',
        height: '@',
        config: '<'
      },
      controller: 'ngTextRollCtrl'
    });

  // template:js
  // endinject

})();
