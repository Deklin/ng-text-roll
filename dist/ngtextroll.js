(function() {

  'use strict';

  /**
   * @ngdoc component
   * @name ui.ng-text-roll.directive:ngTextRoll
   * @description
   * # ngTextRoll
   */

  angular.module('ui.ngTextRoll', ['ui.ngTextRoll.template']).component('ngTextRoll', {
    templateUrl: 'template/ngtextroll.html',
    bindings: {
      target: '=',
      height: '<'
    },
    controller: function() {
      this.current = 0;
      this.render = [{}, {}];
      this.intHeight = parseInt(this.height);
      this.unitHeight = this.height.replace(this.intHeight, '');

      this.next = function() {
        this.current = (this.current === 0 ? 1 : 0);
      };

      this.update = function(increase) {
        this.render[this.current].style = {
          'top': increase ?  1 : 2
        };
        this.render[this.current === 0 ? 1 : 0].style = {
          'top': 'inline'
        };
      };
      this.update();

      this.temp = function() {
        this.next();
        this.update();
      };
    }
  });

  // template:js
  angular.module("ui.ngTextRoll.template", []).run(["$templateCache", function($templateCache) {$templateCache.put("template/ngtextroll.html","<div class=\"ng-text-roll\">\r\n  <div ng-style=\"$ctrl.render[0].style\">1 taco</div>\r\n  <div ng-style=\"$ctrl.render[1].style\">2 burrito</div>\r\n  <pre>T{{$ctrl.render|json}}T{{$ctrl.current}}</pre>\r\n  <button ng-click=\"$ctrl.temp()\">temp toggle</button>\r\n</div>\r\n");}]);
  // endinject

})();
