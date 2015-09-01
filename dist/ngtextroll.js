(function() {

  'use strict';

  /**
   * @ngdoc directive
   * @name ui.ng-text-roll.directive:ngTextRoll
   * @description
   * # ngTextRoll
   */

  angular.module('ui.ngTextRoll', ['ui.ngTextRoll.template'])
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
            $timeout.cancel(strAnim);

            // disable animation, set new strings
            angular.forEach(String(scope.displayValue), function(char, inx) {
              scope.styl1[inx] = scope.styl1[inx] || {};
              scope.styl1[inx].transition = '';
              scope.styl1[inx].top = h + 'px';
              scope.str1 = String(scope.displayValue);
              scope.styl2[inx] = scope.styl2[inx] || {};
              scope.styl2[inx].transition = '';
              scope.styl2[inx].top = '-' + ch + 'px';
            });

            // animate on next tick
            strAnim = $timeout(function() {
              angular.forEach(scope.str1, function(char, inx) {
                scope.str2 = scope.str1;
                var delay = ' ' + scope.getRandomDecimal(0.1, 0.25) + 's';
                scope.styl1[inx].transition = t + delay;
                scope.styl1[inx].top = '0';
                scope.styl2[inx].transition = t + delay;
                scope.styl2[inx].top = '-' + (ch + h + 1) + 'px';
              });
            });
          }
        });

        // clear timeout
        scope.$on('destroy', function() {
          $timeout.cancel(strAnim);
        });

      };

      return {
        templateUrl: 'template/ngtextroll.html',
        scope: {
          displayValue: '=',
          value: '='
        },
        restrict: 'E',
        link: linkFunc
      };

    });

  // template:js
  angular.module("ui.ngTextRoll.template", []).run(["$templateCache", function($templateCache) {$templateCache.put("template/ngtextroll.html","<div class=\"text-roll\">\r\n  {{displayValue}}\r\n  <div class=\"container1\">\r\n    <div class=\"display-char\" ng-style=\"styl1[$index]\" ng-repeat=\"char in str1 track by $index\">{{char}}</div>\r\n  </div>\r\n  <div class=\"container2\">\r\n    <div class=\"display-char\" ng-style=\"styl2[$index]\" ng-repeat=\"char in str2 track by $index\">{{char}}</div>\r\n  </div>\r\n</div>\r\n");}]);
  // endinject

})();
