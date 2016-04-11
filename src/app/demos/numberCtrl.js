(function() {
  'use strict';

  angular
    .module('devApp')
    .controller('numberCtrl', NumberCtrl);

  /** @ngInject */
  function NumberCtrl($scope, demoSvc) {

    $scope.calc = {
      operator: 'add'
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
      $scope.calc.amount = demoSvc.getRandomInt(20, 130);
    };

    $scope.numericValue = demoSvc.getRandomInt(1, 400);
    $scope.calc.amount = demoSvc.getRandomInt(20, 130);

  }

})();
