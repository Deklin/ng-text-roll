(function() {
  'use strict';

  angular
    .module('devApp')
    .controller('currencyCtrl', CurrencyCtrl);

  /** @ngInject */
  function CurrencyCtrl($scope, demoSvc) {

    $scope.calc = {
      operator: 'add'
    };

    $scope.rollConfig = {
      filter: 'currency'
    };

    $scope.updateNumeric = function() {
      var val = $scope.numericValue;
      switch ($scope.calc.operator) {
        case 'add':
          val += $scope.calc.amount;
          break;
        case 'substract':
          val -= $scope.calc.amount;
          break;
        case 'multiply':
          val *= $scope.calc.amount;
          break;
        default:
          break;
      }
      $scope.numericValue = val;
    };

    $scope.changeAmt = function() {
      $scope.calc.amount = demoSvc.getRandomDecimal(20.01, 130.99);
    };

    $scope.numericValue = demoSvc.getRandomDecimal(0.01, 400.99);
    $scope.calc.amount = demoSvc.getRandomDecimal(20.01, 130.99);

  }

})();
