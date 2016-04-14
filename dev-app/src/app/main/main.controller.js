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

    $scope.getRandomInt = function(min, max) {
      return parseInt((Math.random() * (max - min) + min));
    };

    $scope.getRandomDate = function() {
      var inc = parseInt($scope.getRandomDecimal(1, 99));
      var date = new Date();
      date.setDate(date.getDate() + inc);
      return date;
    };

    $scope.rollConfig = {
      filter: 'date',
      filterParams: 'MM/dd/yyyy'
    };

    $scope.updateDate = function() {
      var val = new Date($scope.dateValue.valueOf());
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
    //$scope.calc.amount = $scope.getRandomDecimal(0.01, 300.99) || 0.1;
    $scope.calc.amount = $scope.getRandomInt(1, 15);

  }

})();
