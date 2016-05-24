(function() {
  'use strict';

  angular
    .module('devApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout) {

    // var doTheCalc = function() {
    //   var val = $scope.calc.type === 'date' ? new Date($scope.theValue.valueOf()) : $scope.theValue;
    //   var delta = (parseFloat($scope.calc.specAmt) || $scope.calc.amount);
    //   switch ($scope.calc.operator) {
    //     case 'add':
    //       if ($scope.calc.type === 'date') {
    //         val.setDate($scope.theValue.getDate() + delta);
    //       } else {
    //         val += delta;
    //       }
    //       break;
    //     case 'substract':
    //       if ($scope.calc.type === 'date') {
    //         val.setDate($scope.theValue.getDate() - delta);
    //       } else {
    //         val -= delta;
    //       }
    //       break;
    //     case 'multiply':
    //       val *= delta;
    //       break;
    //     default:
    //       break;
    //   }
    //   return val;
    // };

    $scope.getRandomDecimal = function(min, max) {
      return parseFloat((Math.random() * (max - min) + min).toFixed(2));
    };

    $scope.getRandomInt = function(min, max) {
      return parseInt((Math.random() * (max - min) + min));
    };

    // $scope.getRandomDate = function() {
    //   var inc = parseInt($scope.getRandomDecimal(1, 99));
    //   var date = new Date();
    //   date.setDate(date.getDate() + inc);
    //   return date;
    // };

    //$scope.init = function() {
      // $scope.calc = {
      //   operator: 'add',
      //   type: 'currency'
      // };
      // $scope.rollConfig = {
      //   filter: $scope.calc.type,
      //filterParam1: 'MM/dd/yyyy'
      //filterParam2 : '0'
      //rollBetween: false,
      //rollAll: true
      $scope.theValue = 12345; // $scope.getRandomInt(10000, 50000);
  //  };
    // $scope.calc.amount = $scope.getRandomDecimal(0.01, 30.99) || 1;
    // $scope.nextValue = doTheCalc();
    // };
//    $scope.init();

    var onTimer = function() {
      $scope.theValue = $scope.getRandomInt(10000, 50000);
      $scope.time = $scope.getRandomInt(1000, 1500);
      tm = $timeout(onTimer, $scope.time);
    };
    var tm = $timeout(onTimer, $scope.time);

    // $scope.changeType = function() {
    //   $scope.rollConfig = {
    //     filter: $scope.calc.type,
    //     filterParams: $scope.calc.type === 'date' ? 'MM/dd/yyyy' : '2'
    //   };
    //   $scope.theValue = $scope.calc.type === 'date' ? $scope.getRandomDate() : $scope.getRandomDecimal(0.01, 1000.99) || 1;
    //   if (!$scope.calc.specAmt) {
    //     $scope.calc.amount = $scope.calc.type === 'date' ? $scope.getRandomInt(1, 15) : $scope.getRandomDecimal(0.01, 300.99) || 0.1;
    //   }
    //   $scope.nextValue = doTheCalc();
    // };

    // $scope.updateNext = function() {
    //   $scope.nextValue = doTheCalc();
    // };

    $scope.updateValue = function() {
      $scope.theValue = $scope.getRandomInt(10000, 50000);
      //$scope.updateNext();
    };

  }

})();
