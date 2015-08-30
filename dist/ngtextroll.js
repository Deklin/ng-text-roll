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
        scope.styl1 = ['ui.ngTextRoll.template'];
        scope.styl2 = ['ui.ngTextRoll.template'];

        // set initial string value
        scope.str1 = String(scope.displayValue || scope.value || '');

        scope.$watch('value', function(newVal, oldVal) {
          if (newVal !== oldVal) {
            // get height
            var ch = element.children()[0].offsetHeight;
            var h = element[0].offsetHeight;
            // clear timeout
            $timeout.cancel(strAnim);

            // disable animation, set new string and position outside
            //  of overflow region
            scope.styl1.transition = '';
            scope.styl1.top = h + 'px';
            scope.str1 = String(scope.displayValue);
            // disable animation, set old string to currently viewable
            scope.styl2.transition = '';
            scope.styl2.top = '-' + ch + 'px';
            scope.str2 = scope.str1;

            // animate on next tick
            strAnim = $timeout(function() {
              scope.styl1.transition = t;
              scope.styl1.top = '0';
              scope.styl2.transition = t;
              scope.styl2.top = '-' + (ch + h + 1) + 'px';
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
  angular.module("ui.ngTextRoll.template", []).run(["$templateCache", function($templateCache) {$templateCache.put("template/ngtextroll.html","<div class=\"text-roll\">\n  {{displayValue}}\n  <div class=\"container1\">\n    <div class=\"display-char\" ng-style=\"styl1\" ng-repeat=\"char in str1 track by $index\">{{char}}</div>\n  </div>\n  <div class=\"container2\">\n    <div class=\"display-char\" ng-style=\"styl2\" ng-repeat=\"char in str2 track by $index\">{{char}}</div>\n  </div>\n</div>\n");}]);
  // endinject

})();
