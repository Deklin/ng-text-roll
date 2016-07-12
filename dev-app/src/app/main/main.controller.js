(function() {
  'use strict';

  angular
    .module('devApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout) {

    /*
    var getRandomDecimal = function(min, max) {
      return parseFloat((Math.random() * (max - min) + min).toFixed(2));
    };

    var getRandomInt = function(min, max) {
      return parseInt((Math.random() * (max - min) + min));
    };

    var getRandomDate = function() {
      var inc = parseInt($scope.getRandomDecimal(1, 99));
      var date = new Date();
      date.setDate(date.getDate() + inc);
      return date;
    };
    */

    var incDate = function(inDate, days) {
      var d = new Date(inDate);
      return new Date(d.setDate(d.getDate() + days));
    };

    $scope.rollConfig = {
      filter: 'date',
      filterParam1: 'MMMM dd, yyyy'
        //rollBetween: false,
        //rollAll: true
        //filterParam1: 'MM/dd/yyyy'
        //filterParam2 : '0'
    };

    $scope.theValue = new Date(); // 23; //$scope.getRandomInt(10000, 50000);
    $scope.delta = 11;

    var tm;
    var onTimer = function() {
      $scope.theValue = $scope.getRandomInt(10000, 50000);
      $scope.time = $scope.getRandomInt(2000, 3000);
      tm = $timeout(onTimer, $scope.time);
    };
    //var tm = $timeout(onTimer, $scope.time);

    $scope.updateValue = function() {
      //$scope.theValue = $scope.getRandomInt(10000, 50000);
      if (typeof $scope.theValue === 'object') {
        $scope.theValue = incDate($scope.theValue, $scope.delta);
      } else if (typeof $scope.theValue === 'number') {
        $scope.theValue += $scope.delta;
      }
    };

    $scope.downValue = function() {
      $scope.theValue -= $scope.delta;
    };

    $scope.$on('$destroy', function() {
      if (tm) {
        $timeout.cancel(tm);
      }
    });

  }

})();
