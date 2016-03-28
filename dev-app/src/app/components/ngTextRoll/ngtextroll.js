(function() {

  'use strict';

  /**
   * @ngdoc component
   * @name ui.ng-text-roll.directive:ngTextRoll
   * @description
   * # ngTextRoll
   */

  angular.module('ui.ngTextRoll', [])
    .factory('ngTextRollSvc', function() {
      var svc = {};
      svc.trigger = function() {};
      svc.foo = 34;
      return svc;
    })
    .component('ngTextRoll', {
      templateUrl: 'app/components/ngTextRoll/ngtextroll.html',
      bindings: {
        target: '=',
        height: '<'
      },
      controller: function($timeout, ngTextRollSvc) {
        var ctrl = this;

        ctrl.$onInit = function() {
          ctrl.svc = ngTextRollSvc; // simplify bindings
          ctrl.current = 0;
          ctrl.render = [{}, {}];
          ctrl.intHeight = parseInt(ctrl.height);
          ctrl.unitHeight = ctrl.height.replace(ctrl.intHeight, '');
          ctrl.offset = ctrl.intHeight * 0.1;
          ctrl.topAbove = ((ctrl.intHeight + ctrl.offset) * -1) + ctrl.unitHeight;
          ctrl.topBelow = (ctrl.intHeight + ctrl.offset) + ctrl.unitHeight;
          ctrl.trans = 'top 0.5s'; // constant
          ctrl.zero = '0'; // constant
        };

        ctrl.next = function() {
          ctrl.current = (ctrl.current === 0 ? 1 : 0);
        };

        ctrl.animSetup = function() {
          ctrl.render[ctrl.current].style = {
            '-webkit-transition': undefined,
            'transition': undefined,
            'top': ctrl.topAbove
          };
          ctrl.render[ctrl.current === 0 ? 1 : 0].style = {
            '-webkit-transition': undefined,
            'transition': undefined,
            'top': ctrl.zero
          };
        };

        ctrl.animate = function(scope) { // can only run from within $timeout
          scope.render[scope.current].style = {
            'top': ctrl.zero,
            '-webkit-transition': scope.trans,
            'transition': scope.trans
          };
          scope.render[scope.current === 0 ? 1 : 0].style = {
            '-webkit-transition': scope.trans,
            'transition': scope.trans,
            'top': scope.topBelow
          };
        };

        ctrl.runAnim = function() {
          ctrl.next();
          ctrl.animSetup();
          ctrl.t = $timeout(ctrl.animate, 0, true, ctrl);
        };

        ctrl.$onDestroy = function() { // clean up timer
          $timeout.cancel(ctrl.t);
        };

      }
    });

  // template:js
  // endinject

})();
