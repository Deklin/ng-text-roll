(function() {
  'use strict';

  angular
    .module('devApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, ngTextRollSvc) {

    $scope.calc = {
      operator: 'add'
    };

    $scope.getRandomDecimal = function(min, max) {
      return parseFloat((Math.random() * (max - min) + min).toFixed(2));
    };

    $scope.getRandomDate = function() {
      var inc = parseInt($scope.getRandomDecimal(1, 99));
      var date = new Date();
      date.setDate(date.getDate() + inc);
      return date;
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
      val = parseFloat(val.toFixed(2));
      $scope.numericValue = val;
      ngTextRollSvc.runAnim();
    };

    $scope.numericValue = $scope.getRandomDecimal(0.01, 10.99) || 1;
    $scope.calc.amount = $scope.getRandomDecimal(0.01, 3.99) || 0.1;
    $scope.dateValue = $scope.getRandomDate();
  }

})();
