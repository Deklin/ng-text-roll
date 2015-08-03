(function() {
  'use strict';

  angular
    .module('devApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {

    $scope.calc = {
      operator: 'add'
    };

    $scope.getRandomDecimal = function(min, max) {
      var num = Math.random() * (max - min) + min;
      return parseFloat(num.toFixed(2));
    };

    $scope.update = function() {
      var val = $scope.numericValue || 1;
      var delta = $scope.calc.amount || 0;
      switch ($scope.calc.operator) {
        case 'add':
          val += delta;
          break;
        case 'substract':
          val -= delta;
          break;
        case 'multiply':
          val *= delta;
          break;
        default:
          break;
      }
      val = parseFloat(val.toFixed(2));
      $scope.numericValue = val;
    };

    $scope.numericValue = $scope.getRandomDecimal(0.01, 10.99);

  }

})();