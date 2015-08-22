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

        var h = element.children()[0].offsetHeight;
        var t = 'top 0.5s ease';
        scope.styl1 = {};
        scope.styl2 = {};

        // set initial binding
        scope.str1 = String(scope.displayValue || scope.value || '');

        scope.$watch('value', function(newVal, oldVal) {
          if (newVal !== oldVal) {

            // 1
            scope.styl1.top = h + 'px';
            scope.styl2.top = '0';
            scope.styl1.transition = '';
            scope.styl2.transition = '';
            scope.str2 = scope.str1;

            $timeout(function() {
              // 2
              scope.str1 = String(scope.displayValue);
              $timeout(function() {
                // 3
                scope.styl1.transition = t;
                scope.styl2.transition = t;
                scope.styl2.top = '-' + h + 'px';
                scope.styl1.top = '0';
              });
            });
          }
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
