/*jshint bitwise: false*/

(function() {

  'use strict';

  /**
   * @ngdoc component
   * @name ui.ng-text-roll.directive:ngTextRoll
   * @description
   * # ngTextRoll
   */

  angular.module('ui.ngTextRoll', [])
    .factory('ngTextRollSvc', function($timeout, $filter) {
      var svc = {};

      // local vars
      svc.current = 0;
      svc.render = [{}, {}];
      // Constants
      svc.zero = '0';

      svc.init = function(height, target, currency) {
        svc.height = height;
        svc.currency = currency;
        svc.intHeight = parseFloat(svc.height);
        svc.unitHeight = svc.height.replace(svc.intHeight, '');
        svc.offset = svc.intHeight * 0.17;
        svc.topAbove = ((svc.intHeight + svc.offset) * -1) + svc.unitHeight;
        svc.topBelow = (svc.intHeight + svc.offset) + svc.unitHeight;
        svc.transTemplate = 'top Xs ease-in-out';
        svc.transRegex = /X/;
        // set initial render
        svc.render[svc.current].style = {
          'top': svc.zero
        };
        svc.render[svc.current].target = svc.formatTarget(target);
      };

      svc.formatTarget = function(target) {
        return svc.currency ? $filter('currency')(target) : String(target);
      };

      svc.randDec = function(min, max) {
        return parseFloat((Math.random() * (max - min) + min).toFixed(2));
      };

      svc.trans = function() {
        return svc.transTemplate.replace(svc.transRegex, svc.randDec(0.3, 0.8));
      };

      svc.animSetup = function(oldVal, newVal, pos) {
        svc.render[svc.current].target = svc.formatTarget(newVal);
        svc.render[svc.current].style = [];
        angular.forEach(svc.render[svc.current].target, function() {
          svc.render[svc.current].style.push({
            '-webkit-transition': undefined,
            '-moz-transition': undefined,
            'transition': undefined,
            'top': pos ? svc.topBelow : svc.topAbove
          });
        });

        var inx = svc.current ^ 1;
        svc.render[inx].target = svc.formatTarget(oldVal);
        svc.render[inx].style = [];
        angular.forEach(svc.render[inx].target, function() {
          svc.render[inx].style.push({
            '-webkit-transition': undefined,
            '-moz-transition': undefined,
            'transition': undefined,
            'top': svc.zero
          });
        });
      };

      svc.animate = function(isIncrease) {
        angular.forEach(svc.render[svc.current].style, function(s) {
          var trans = svc.trans();
          s['-webkit-transition'] = trans;
          s['-moz-transition'] = trans;
          s.transition = trans;
          s.top = svc.zero;
        });

        var inx = svc.current ^ 1;
        var blur = svc.render[svc.current].target.length !== svc.render[inx].target.length;
        angular.forEach(svc.render[inx].style, function(s) {
          var trans = svc.trans();
          s['-webkit-transition'] = trans;
          s['-moz-transition'] = trans;
          s.transition = trans;
          s.top = isIncrease ? svc.topAbove : svc.topBelow;
          if (blur) {
            s['-webkit-filter'] = 'blur(5px)';
            s.filter = 'blur(5px)';
          }
        });
      };

      svc.runAnim = function(oldVal, newVal) {
        var isIncrease = newVal > oldVal;
        svc.current ^= svc.current;
        svc.animSetup(oldVal, newVal, isIncrease);
        // A small delay is needed to achieve the desired effect
        //  NOTE: Firefox required at least 25ms delay
        svc.t = $timeout(svc.animate, 25, true, isIncrease);
      };

      svc.clearTimeout = function() {
        $timeout.cancel(svc.t);
      };

      return svc;
    })
    .component('ngTextRoll', {
      templateUrl: 'app/components/ngTextRoll/ngtextroll.html',
      bindings: {
        target: '=',
        currency: '<',
        height: '<'
      },
      controller: function($timeout, ngTextRollSvc) {
        var ctrl = this;

        ctrl.$onInit = function() {
          ctrl.svc = ngTextRollSvc; // simplify bindings
          ctrl.svc.init(ctrl.height, ctrl.target, this.currency);
        };

        ctrl.$onDestroy = function() { // clean up timer
          ctrl.svc.clearTimeout();
        };

      }
    });

  // template:js
  // endinject

})();
