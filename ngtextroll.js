'use strict';

/**
 * @ngdoc directive
 * @name ui.ng-text-roll.directive:ngTextRoll
 * @description
 * # ngTextRoll
 */

angular.module('ui.ng-text-roll', [])
  .directive('ngTextRoll', function ($timeout) {
    return {
      templateUrl: 'scripts/directives/ngtextroll.html',
      scope: {
        displayValue:'=',
        value:'='
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        scope.transition = 'margin-top 0.33s'

        // Element height
        scope.eleHeight = element[0].offsetHeight;

        // Set initial styles
        scope.itemCurrentStyle = { 'margin-top' : '-' + scope.eleHeight + 'px' };
        scope.itemChangeStyle = {};

       scope.$watch('value', function(newVal, oldVal) {
          if (newVal != oldVal) {

            // Reset position
            scope.itemCurrentStyle.transition = '';
            scope.itemCurrentStyle['margin-top'] = '-' + scope.eleHeight + 'px';
            scope.itemChangeStyle.transition = '';
            scope.itemChangeStyle['margin-top'] = '0';

            // Perform animation
            $timeout(function() {
              scope.itemCurrentStyle.transition = scope.transition;
              scope.itemCurrentStyle['margin-top'] = '-' + scope.eleHeight * 2 + 'px';
              scope.itemChangeStyle.transition = scope.transition;
              scope.itemChangeStyle['margin-top'] = '-' + scope.eleHeight + 'px'
            });

          }
        });

      }
    };
  });
