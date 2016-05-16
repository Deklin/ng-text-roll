(function() {
  'use strict';

  angular
    .module('devApp')
    .component('controls', {
      templateUrl: 'app/components/controls/controls.html',
      bindings: {
        targetValue: '<',
        init: '<',
        onNewDelta: '&',
        onUpdate: '&',
        hideMultiply: '@'
      },
      controller: function() {

        var ctrl = this;

        ctrl.glyphs = {
          'add': 'glyphicon-plus',
          'substract': 'glyphicon-minus',
          'multiply': 'glyphicon-remove'
        };
        ctrl.updateGlyph = function() {
          return ctrl.glyphs[ctrl.init.operator];
        };

      }
    });

})();
