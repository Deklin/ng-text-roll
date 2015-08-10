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
      return {
        templateUrl: 'app/components/ngTextRoll/ngtextroll.html',
        scope: {
          displayValue: '=',
          value: '='
        },
        restrict: 'E',
        link: function postLink(scope, element) {

          // Helper function to set display value as string
          scope.setDisplayText = function() {
            scope.value = scope.value || 'Error: value not set';
            scope.strDisplayText = scope.displayValue ?
              String(scope.displayValue) : String(scope.value);
          };

          // Element height
          scope.eleHeight = element[0].offsetHeight;
          $timeout(function() {
            scope.heightDiff = element.children()[0].offsetHeight - scope.eleHeight;
          });

          // Set initial styles
          scope.transition = 'margin-top 0.33s';
          scope.itemCurrentStyle = {
            'margin-top': '-' + scope.eleHeight + 'px'
          };
          scope.itemChangeStyle = {};
          scope.setDisplayText();

          scope.$watch('value', function(newVal, oldVal) {

            if (newVal !== oldVal) {

              // Display value
              scope.setDisplayText();

              // Reset position
              scope.itemCurrentStyle.transition = '';
              scope.itemCurrentStyle['margin-top'] = '-' + scope.eleHeight + 'px';
              scope.itemChangeStyle.transition = '';
              scope.itemChangeStyle['margin-top'] = '0';

              // Perform animation
              $timeout(function() {
                scope.itemCurrentStyle.transition = scope.transition;
                scope.itemCurrentStyle['margin-top'] = '-' + (scope.eleHeight + scope.heightDiff) * 2 + 'px';
                scope.itemChangeStyle.transition = scope.transition;
                scope.itemChangeStyle['margin-top'] = '-' + scope.eleHeight + 'px';
              });

            }

          });

        }
      };
    });

    // template:js
    // endinject

})();
