(function() {

  'use strict';

  /**
   * @ngdoc component
   * @name ui.ng-text-roll.directive:ngTextRoll
   * @description
   * # ngTextRoll
   */

  angular.module('ui.ngTextRoll', [])
    .factory('ngTextRollSvc', function($timeout) {
      var svc = {};

      // local vars
      svc.current = 0;
      svc.render = [{}, {}];
      // Constants
      svc.trans = 'top 0.5s ease-in-out';
      svc.zero = '0';

      svc.init = function(height) {
        svc.height = height;
        svc.intHeight = parseInt(svc.height);
        svc.unitHeight = svc.height.replace(svc.intHeight, '');
        svc.offset = svc.intHeight * 0.1;
        svc.topAbove = ((svc.intHeight + svc.offset) * -1) + svc.unitHeight;
        svc.topBelow = (svc.intHeight + svc.offset) + svc.unitHeight;
        // set initial render
        svc.render[0].style = {
          'top': svc.zero
        };
      };

      svc.next = function() {
        svc.current = (svc.current === 0 ? 1 : 0);
      };

      svc.animSetup = function() {
        svc.render[svc.current].style = {
          '-webkit-transition': undefined,
          'transition': undefined,
          'top': svc.topAbove
        };
        svc.render[svc.current === 0 ? 1 : 0].style = {
          '-webkit-transition': undefined,
          'transition': undefined,
          'top': svc.zero
        };
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

      svc.runAnim = function() {
        svc.next();
        svc.animSetup();
        svc.t = $timeout(svc.animate);
      };

      svc.clearTimeout = function() { // clean up timer
        $timeout.cancel(svc.t);
      };

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
          ctrl.svc.init(ctrl.height);
        };

        ctrl.$onDestroy = function() { // clean up timer
          svc.clearTimeout();
        };

      }
    });

  // template:js
  // endinject

})();
