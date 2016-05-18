(function() {
  'use strict';

  angular
    .module('devApp')
    .controller('currencyCtrl', CurrencyCtrl);

  /** @ngInject */
  function CurrencyCtrl($scope, demoSvc) {

    $scope.calc = {
      operator: 'add',
      delta: demoSvc.getRandomDecimal(0.01, 130.99)
    };

    $scope.rollConfig = {
      filter: 'currency'

    };

    $scope.rollStyle = {
      'color': 'green',
      'font-family': 'Times New Roman',
      'letter-spacing': '3px',
      'font-style': 'italic',
      'font-weight': 'bold'
    };

    $scope.updateNumeric = function() {
      var val = $scope.numericValue;
      switch ($scope.calc.operator) {
        case 'add':
          val += $scope.calc.delta;
          break;
        case 'substract':
          val -= $scope.calc.delta;
          break;
        case 'multiply':
          val *= $scope.calc.delta;
          break;
        default:
          break;
      }
      $scope.numericValue = val;
    };

    $scope.changeDelta = function() {
      $scope.calc.delta = demoSvc.getRandomDecimal(20.01, 130.99);
    };

    $scope.numericValue = demoSvc.getRandomDecimal(0.01, 400.99);

  }

})();
