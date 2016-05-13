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

      ctrl.$onInit = function() {
        ctrl.svc = ngTextRollSvc;
        ctrl.svc.validate(ctrl); // set height if not provided
        ctrl.heightValue = parseFloat(ctrl.height);
        ctrl.heightUnit = ctrl.height.replace(ctrl.heightValue, '');
        ctrl.heightOffset = ctrl.heightValue * 0.5;
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
    .factory('ngTextRollUtilSvc', function() {
      var util = {};

      util.randDec = function(min, max) {
        return parseFloat((Math.random() * (max - min) + min).toFixed(2));
      };

      util.buildRange = function(isIncrease, newChar, oldChar) {
        var start = newChar.charCodeAt(0);
        var end = oldChar.charCodeAt(0);
        var steps = Math.abs(start - end);
        var arrStr = [];
        for (var i = 0; i < steps; i++) {
          if (isIncrease) {
            arrStr.push(String.fromCharCode(start < end ? --end : ++end));
          } else {
            arrStr.push(String.fromCharCode(start < end ? start++ : start--));
          }
        }
        if (steps === 0) {
          arrStr.push(String.fromCharCode(start));
        }
        return arrStr;
      };

      return util;
    })
    .factory('ngTextRollSvc', function($timeout, $filter, ngTextRollUtilSvc) {
      var svc = {};

      // Constants
      var zero = '0',
        transTemplate = 'top Xs ease-in-out',
        transRegex = /X/,
        tumbleMs = { // range of milliseconds for random tumble effect
          min: 0.3,
          max: 0.8
        };

      var formatTarget = function(cfg, target) {
        return (cfg && cfg.filter) ? $filter(cfg.filter)(target, cfg.filterParams) : String(target);
      };

      var trans = function(ctrl, scale) {
        return transTemplate.replace(transRegex, ngTextRollUtilSvc.randDec(tumbleMs.min, tumbleMs.max) * scale * (ctrl.config.rollAll ? 0.3 : 1));
      };

      var charDiff = function(ctrl, inx) {
        return ctrl.config.rollAll ? false : (ctrl.render[ctrl.current].target[inx] === ctrl.render[ctrl.notCurrent].target[inx]);
      };

      var calcTopStartPos = function(ctrl, isIncrease, scale) {
        return isIncrease ? ctrl.heightValue + ctrl.heightOffset + ctrl.heightUnit : (((ctrl.heightValue * scale) + ctrl.heightOffset) * -1) + ctrl.heightUnit;
      };

      var calcTopEndPos = function(ctrl, isIncrease, scale) {
        return isIncrease ? (((scale - 1) * -1) * ctrl.heightValue) + ctrl.heightUnit : zero;
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
            ctrl.config.filter = undefined;
            console.warn('ngTextRoll: config.filter incorrectly specified; disabling');
          }
        }
      };

      // Initialize values and setup value defaults
      svc.init = function(ctrl) {
        ctrl.render[ctrl.current].style = { // set initial render
          'top': zero
        };
        ctrl.config = ctrl.config || {}; // ensure config is not null
        ctrl.render[ctrl.current].target = formatTarget(ctrl.config, ctrl.target);
      };

      var valuesSetup = function(ctrl, oldVal, newVal, isIncrease) {
        var strNewVal = formatTarget(ctrl.config, newVal);
        var strOldVal = formatTarget(ctrl.config, oldVal);
        var lengthDiffers = (strNewVal.length !== strOldVal.length);

        if (ctrl.config.rollBetween && !lengthDiffers) {
          ctrl.render[ctrl.current].target = [];
          angular.forEach(strNewVal, function(char, inx) {
            ctrl.render[ctrl.current].target.push(ngTextRollUtilSvc.buildRange(isIncrease, char, strOldVal[inx]));
          });
        } else {
          ctrl.render[ctrl.current].target = strNewVal;
        }
        ctrl.render[ctrl.notCurrent].target = strOldVal;

        return lengthDiffers;
      };

      // Move pre-animation divs without animations
      var animSetup = function(ctrl, oldVal, newVal, isIncrease) {
        ctrl.render[ctrl.current].style = [];
        angular.forEach(ctrl.render[ctrl.current].target, function(s, inx) {
          ctrl.render[ctrl.current].style.push({
            '-webkit-transition': undefined,
            '-moz-transition': undefined,
            'transition': undefined,
            'top': calcTopStartPos(ctrl, isIncrease, ctrl.render[ctrl.current].target[inx].length)
          });
        });

        ctrl.render[ctrl.notCurrent].style = [];
        angular.forEach(ctrl.render[ctrl.notCurrent].target, function() {
          ctrl.render[ctrl.notCurrent].style.push({
            '-webkit-transition': undefined,
            '-moz-transition': undefined,
            'transition': undefined,
            'top': zero
          });
        });
      };

      // Enable animations on divs and animate
      var animate = function(ctrl, isIncrease, lengthDiffers) {
        angular.forEach(ctrl.render[ctrl.current].style, function(s, inx) {
          if (!charDiff(ctrl, inx)) {
            var tran = trans(ctrl, ctrl.render[ctrl.current].target[inx].length);
            s['-webkit-transition'] = tran;
            s['-moz-transition'] = tran;
            s.transition = tran;
            if (ctrl.config.rollBetween) {
              s.top = calcTopEndPos(ctrl, isIncrease, ctrl.render[ctrl.current].target[inx].length);
            } else {
              s.top = zero;
            }
          }
        });

        angular.forEach(ctrl.render[ctrl.notCurrent].style, function(s, inx) {
          if (!charDiff(ctrl, inx)) {
            var tran = trans(ctrl, 1);
            s['-webkit-transition'] = tran;
            s['-moz-transition'] = tran;
            s.transition = tran;
            s.top = (ctrl.heightValue + ctrl.heightOffset) * (isIncrease ? -1 : 1) + ctrl.heightUnit;
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
        var lengthDiffers = valuesSetup(ctrl, oldVal, newVal, isIncrease);
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
