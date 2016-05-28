(function() {
  'use strict';

  angular
    .module('devApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout) {

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
      filter: 'currency',
      filterParam2: '2'
        //rollBetween: false,
        //rollAll: true
        //filterParam1: 'MM/dd/yyyy'
        //filterParam2 : '0'
    };

    $scope.theValue = $scope.getRandomInt(10000, 50000);

    var tm;
    var onTimer = function() {
      $scope.theValue = $scope.getRandomInt(10000, 50000);
      $scope.time = $scope.getRandomInt(2000, 3000);
      tm = $timeout(onTimer, $scope.time);
    };
    //var tm = $timeout(onTimer, $scope.time);

    $scope.updateValue = function() {
      //$scope.theValue = $scope.getRandomInt(10000, 50000);
      $scope.theValue += 24256.11;
    };

    $scope.downValue = function() {
      $scope.theValue -= 24256.12;
    };

    $scope.$on('$destroy', function() {
      if (tm) {
        $timeout.cancel(tm);
      }
    });

  }

})();
