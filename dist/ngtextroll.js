/*jshint bitwise: false*/

(function() {

  'use strict';

  /**
   * @ngdoc component
   * @name ui.ng-text-roll.directive:ngTextRoll
   * @description
   * # ngTextRoll
   */

  angular.module('ui.ngTextRoll', ['ui.ngTextRoll.template'])
    .factory('ngTextRollSvc', function($timeout) {
      var svc = {};

      // local vars
      svc.current = 0;
      svc.render = [{}, {}];
      // Constants
      svc.zero = '0';

      svc.validate = function(initialValue, height) {
        svc.height = height;
        if (!svc.height) {
          var defaultHeight = '2em';
          console.warn('ngTextRoll: height not specified, defaulting to \'' + defaultHeight + '\'');
          svc.height = defaultHeight;
        }
        svc.initialValue = initialValue;
        if (!svc.initialValue) {
          var defaultInitial = 'ngTextRoll';
          console.error('ngTextRoll: initialValue not specified, defaulting to\'' + defaultInitial + '\'');
          svc.initialValue = defaultInitial;
        }
      };

      svc.init = function() {
        svc.intHeight = parseFloat(svc.height);
        svc.unitHeight = svc.height.replace(svc.intHeight, '');
        svc.offset = svc.intHeight * 0.17;
        svc.topAbove = ((svc.intHeight + svc.offset) * -1) + svc.unitHeight;
        svc.topBelow = (svc.intHeight + svc.offset) + svc.unitHeight;
        svc.transTemplate = 'top Xs ease-in-out';
        svc.transRegex = /X/;
        svc.tumbleMs = {
          min: 0.3,
          max: 0.8
        };
        // set initial render
        svc.render[svc.current].style = {
          'top': svc.zero
        };
        svc.oldVal = svc.initialValue;
        svc.render[svc.current].target = svc.formatTarget(svc.initialValue);
      };

      svc.formatTarget = function(target) {
        //return svc.currency ? $filter('currency')(target) : String(target);
        return String(target);
      };

      svc.randDec = function(min, max) {
        return parseFloat((Math.random() * (max - min) + min).toFixed(2));
      };

      svc.trans = function() {
        return svc.transTemplate.replace(svc.transRegex, svc.randDec(svc.tumbleMs.min, svc.tumbleMs.max));
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
        svc.oldVal = svc.newVal;
      };

      svc.roll = function(newVal) {
        svc.newVal = newVal;
        var isIncrease = svc.newVal > svc.oldVal;
        svc.current ^= svc.current;
        svc.animSetup(svc.oldVal, newVal, isIncrease);
        // A delay is needed to achieve the desired effect
        //  NOTE: Firefox required at least 25ms delay
        svc.t = $timeout(svc.animate, 25, true, isIncrease);
      };

      svc.clearTimeout = function() {
        $timeout.cancel(svc.t);
      };

      return svc;
    })
    .component('ngTextRoll', {
      templateUrl: 'template/ngtextroll.html',
      bindings: {
        initialValue: '<',
        config: '<',
        height: '@'
      },
      controller: function(ngTextRollSvc) {
        var ctrl = this;

        ctrl.$onInit = function() {
          ctrl.svc = ngTextRollSvc; // simplify bindings
          ctrl.svc.validate(ctrl.initialValue, ctrl.height);
          ctrl.svc.init();
        };

        ctrl.$onDestroy = function() { // clean up timer
          ctrl.svc.clearTimeout();
        };

      }
    });

  // template:js
  angular.module("ui.ngTextRoll.template", []).run(["$templateCache", function($templateCache) {$templateCache.put("template/ngtextroll.html","<div id=\"ng-text-roll\" ng-style=\"{\'font-size\' : $ctrl.height }\">\r\n  <div class=\"outer\">\r\n    <div class=\"inner\" ng-repeat=\"pChar in $ctrl.svc.render[$ctrl.svc.current].target track by $index\">\r\n      <div class=\"char\" ng-style=\"$ctrl.svc.render[0].style[$index]\">{{$ctrl.svc.render[0].target[$index]}}</div>\r\n      <div class=\"char\" ng-style=\"$ctrl.svc.render[1].style[$index]\">{{$ctrl.svc.render[1].target[$index]}}</div>\r\n      {{pChar}}\r\n    </div>\r\n  </div>\r\n</div>\r\n");}]);
  // endinject

})();
