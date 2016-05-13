(function() {
  'use strict';

  angular
    .module('devApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {

    var doTheCalc = function() {
      var val = $scope.calc.type === 'date' ? new Date($scope.theValue.valueOf()) : $scope.theValue;
      var delta = (parseFloat($scope.calc.specAmt) || $scope.calc.amount);
      switch ($scope.calc.operator) {
        case 'add':
          if ($scope.calc.type === 'date') {
            val.setDate($scope.theValue.getDate() + delta);
          } else {
            val += delta;
          }
          break;
        case 'substract':
          if ($scope.calc.type === 'date') {
            val.setDate($scope.theValue.getDate() - delta);
          } else {
            val -= delta;
          }
          break;
        case 'multiply':
          val *= delta;
          break;
        default:
          break;
      }
      return val;
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

    $scope.init = function() {
      $scope.calc = {
        operator: 'add',
        type: 'number'
      };
      // $scope.rollConfig = {
      //   filter: $scope.calc.type,
      //   filterParams: '2',
      //   rollBetween: true,
      //   rollAll: true
      // };
      $scope.theValue = 1.23;
      $scope.calc.amount = $scope.getRandomDecimal(0.01, 30.99) || 1;
      $scope.nextValue = doTheCalc();
    };
    $scope.init();

    $scope.changeType = function() {
      $scope.rollConfig = {
        filter: $scope.calc.type,
        filterParams: $scope.calc.type === 'date' ? 'MM/dd/yyyy' : '2'
      };
      $scope.theValue = $scope.calc.type === 'date' ? $scope.getRandomDate() : $scope.getRandomDecimal(0.01, 1000.99) || 1;
      if (!$scope.calc.specAmt) {
        $scope.calc.amount = $scope.calc.type === 'date' ? $scope.getRandomInt(1, 15) : $scope.getRandomDecimal(0.01, 300.99) || 0.1;
      }
      $scope.nextValue = doTheCalc();
    };

    $scope.updateNext = function() {
      $scope.nextValue = doTheCalc();
    };

    $scope.updateValue = function() {
      $scope.theValue = doTheCalc();
      $scope.updateNext();
    };

  }

})();
