(function() {

  'use strict';

  /**
   * @ngdoc directive
   * @name ui.ng-text-roll.directive:ngTextRoll
   * @description
   * # ngTextRoll
   */

  angular.module('ui.ngTextRoll', [])
    .directive('ngTextRoll', function($timeout) {

      var linkFunc = function(scope, element) {

        var t = 'top 0.5s ease';
        var strAnim = {};
        scope.styl1 = [];
        scope.styl2 = [];

        // set initial string value
        scope.str1 = String(scope.displayValue || scope.value || '');
        scope.str2 = scope.str1;

        scope.getRandomDecimal = function(min, max) {
          return parseFloat((Math.random() * (max - min) + min).toFixed(2));
        };

        scope.$watch('value', function(newVal, oldVal) {
          if (newVal !== oldVal) {
            // get height
            var ch = element.children()[0].offsetHeight;
            var h = element[0].offsetHeight;

            // clear timeout
            //$timeout.cancel(strAnim);

            // roll 'up' or roll 'down'
            var direction = newVal > oldVal;

            // disable animation, set new string
            angular.forEach(String(scope.displayValue), function(char, inx) {
              scope.styl1[inx] = scope.styl1[inx] || {};
              scope.styl1[inx].transition = '';
              scope.styl1[inx].top = (direction ? '' : '-') + (h + 1) + 'px';
              scope.styl2[inx] = scope.styl2[inx] || {};
              scope.styl2[inx].transition = '';
              scope.styl2[inx].top = '-' + (ch + 1) + 'px';
            });

            // animate on next tick
            strAnim = $timeout(function() {
              angular.forEach(scope.str1, function(char, inx) {
                var delay = ' ' + scope.getRandomDecimal(0.1, 0.25) + 's';
                scope.styl1[inx].transition = t + delay;
                scope.styl1[inx].top = '0';
                scope.styl2[inx].transition = t + delay;
                scope.styl2[inx].top = direction ? '-' + (ch + h + 1) + 'px' : '0';
              });
              strAnim = $timeout(function() {
                scope.str1 = String(scope.displayValue);
                scope.str2 = scope.str1;
              }, 200);
            });
          }
        });

        // clear timeout
        scope.$on('destroy', function() {
          $timeout.cancel(strAnim);
        });

      };

      return {
        templateUrl: 'app/components/ngTextRoll/ngtextroll.html',
        scope: {
          displayValue: '=',
          value: '='
        },
        restrict: 'E',
        link: linkFunc
      };

    });

  // template:js
  // endinject

})();
