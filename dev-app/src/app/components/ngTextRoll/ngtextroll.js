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

          scope.transitionStr = 'margin-top 0.33s ease ';
          scope.itemCurrentStyle = [];
          scope.itemChangeStyle = [];

          // scope.getRandomInt = function(min, max) {
          //   return Math.random() * (max - min) + min;
          // };
          scope.getRandomDec = function(min, max) {
            return (Math.random() * (max - min) + min).toFixed(2);
          };

          // Default to value but prefer displayValue
          scope.setDisplayText = function() {
            scope.value = scope.value || 'Error: value not set';
            scope.strDisplayText = scope.displayValue ?
              String(scope.displayValue) : String(scope.value);

            for (var i = 0; i < scope.strDisplayText.length; i += 1) {
              scope.itemCurrentStyle[i] = {
                'margin-top': '-' + scope.eleHeight + 'px'
              };
              scope.itemChangeStyle[i] = {};
            }
          };

          // Child height it not ready immediatly
          scope.eleHeight = element[0].offsetHeight;
          $timeout(function() {
            scope.heightDiff = element.children()[0].offsetHeight - scope.eleHeight;
          });

          // Set initial styles
          scope.setDisplayText();

          scope.$watch('value', function(newVal, oldVal) {

            if (newVal !== oldVal) {

              // Display value
              scope.setDisplayText();

              // Reset position
              for (var i = 0; i < scope.strDisplayText.length; i += 1) {
                scope.itemCurrentStyle[i].transition = '';
                scope.itemCurrentStyle[i]['margin-top'] = '-' + scope.eleHeight + 'px';
                scope.itemChangeStyle[i].transition = '';
                scope.itemChangeStyle[i]['margin-top'] = '0';
              }

              // Perform animation
              $timeout(function() {
                for (var i = 0; i < scope.strDisplayText.length; i += 1) {
                  var delay = scope.getRandomDec(0.0, 0.25) + 's';
                  scope.itemCurrentStyle[i].transition = scope.transitionStr + delay;
                  scope.itemCurrentStyle[i]['margin-top'] = '-'
                    + (scope.eleHeight + scope.heightDiff) * 2 + 'px';
                  scope.itemChangeStyle[i].transition = scope.transitionStr + delay;
                  scope.itemChangeStyle[i]['margin-top'] = '-' + scope.eleHeight + 'px';
                }
              });

            }

          });

        }
      };
    });

  // template:js
  // endinject

})();
