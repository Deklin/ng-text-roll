(function() {

  'use strict';

  /**
   * @ngdoc component
   * @name ui.ng-text-roll.directive:ngTextRoll
   * @description
   * # ngTextRoll
   */

  angular.module('ui.ngTextRoll', ['ui.ngTextRoll.template'])
    .factory('ngTextRollSvc', function($timeout, $filter) {
      var svc = {};

      // local vars
      svc.current = 0;
      svc.render = [{}, {}];
      // Constants
      svc.trans = 'top 0.5s ease-in-out';
      svc.zero = '0';

     svc.init = function(height, target, currency) {
        svc.height = height;
        svc.currency = currency;
        svc.intHeight = parseInt(svc.height);
        svc.unitHeight = svc.height.replace(svc.intHeight, '');
        svc.offset = svc.intHeight * 0.149;
        svc.topAbove = ((svc.intHeight + svc.offset) * -1) + svc.unitHeight;
        svc.topBelow = (svc.intHeight + svc.offset) + svc.unitHeight;
        // set initial render
        svc.render[0].style = {
          'top': svc.zero
        };
        svc.render[0].target = svc.formatCurrency(target);
      };

      svc.formatCurrency = function(target) {
        return svc.currency ? $filter('currency')(target) : target;
      };

      svc.next = function() {
        svc.current = (svc.current === 0 ? 1 : 0);
      };

      svc.animSetup = function(oldVal, newVal) {
        svc.render[svc.current].style = {
          '-webkit-transition': undefined,
          'transition': undefined,
          'top': svc.topAbove
        };
        svc.render[svc.current].target = svc.formatCurrency(newVal);
        svc.render[svc.current === 0 ? 1 : 0].style = {
          '-webkit-transition': undefined,
          'transition': undefined,
          'top': svc.zero
        };
        svc.render[svc.current === 0 ? 1 : 0].target = svc.formatCurrency(oldVal);
      };

      svc.animate = function() {
        svc.render[svc.current].style = {
          'top': svc.zero,
          '-webkit-transition': svc.trans,
          'transition': svc.trans
        };
        svc.render[svc.current === 0 ? 1 : 0].style = {
          '-webkit-transition': svc.trans,
          'transition': svc.trans,
          'top': svc.topBelow
        };
      };

      svc.runAnim = function(oldVal, newVal) {
        svc.next();
        svc.animSetup(oldVal, newVal);
        svc.t = $timeout(svc.animate);
      };

      svc.clearTimeout = function() { // clean up timer
        $timeout.cancel(svc.t);
      };

      return svc;
    })
    .component('ngTextRoll', {
      templateUrl: 'template/ngtextroll.html',
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
  angular.module("ui.ngTextRoll.template", []).run(["$templateCache", function($templateCache) {$templateCache.put("template/ngtextroll.html","<div class=\"ng-text-roll\" ng-style=\"{\'font-size\' : $ctrl.height }\">\n  {{$ctrl.svc.render[0].target}}\n  <div class=\"ng-text-roll-render\" ng-style=\"$ctrl.svc.render[0].style\">{{$ctrl.svc.render[0].target}}</div>\n  <div class=\"ng-text-roll-render\" ng-style=\"$ctrl.svc.render[1].style\">{{$ctrl.svc.render[1].target}}</div>\n</div>\n<div style=\"height:100px\"></div>\n<div>\n  <pre>T{{$ctrl.render|json}}T{{$ctrl.svc.current}}</pre>\n  <button ng-click=\"$ctrl.svc.next()\">next</button>\n  <button ng-click=\"$ctrl.svc.animSetup()\">animSetup</button>\n  <button ng-click=\"$ctrl.svc.animate()\">animate</button>\n  <button ng-click=\"$ctrl.svc.runAnim()\">run</button>\n</div>\n");}]);
  // endinject

})();
