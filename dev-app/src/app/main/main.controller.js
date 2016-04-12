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
      return parseFloat((Math.random() * (max - min) + min).toFixed(2));
    };

    $scope.getRandomDate = function() {
      var inc = parseInt($scope.getRandomDecimal(1, 99));
      var date = new Date();
      date.setDate(date.getDate() + inc);
      return date;
    };

    $scope.rollConfig = {
      filter: 'date'
    };

    $scope.updateDate = function() {
      var val = new Date();// $scope.dateValue;
      switch ($scope.calc.operator) {
        case 'add':
          val.setDate($scope.dateValue.getDate() + $scope.calc.amount);
          break;
        case 'substract':
          val.setDate($scope.dateValue.getDate() - $scope.calc.amount);
          break;
        default:
          break;
      }
      $scope.dateValue = val;
    };

    //$scope.numericValue = $scope.getRandomDecimal(0.01, 1000.99) || 1;
    $scope.dateValue = $scope.getRandomDate();
console.log(1, typeof $scope.dateValue);
    $scope.calc.amount = $scope.getRandomDecimal(0.01, 300.99) || 0.1;

  }

})();
