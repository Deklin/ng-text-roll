(function() {
  'use strict';

  angular
    .module('devApp')
    .controller('clockCtrl', CurrencyCtrl);

  /** @ngInject */
  function CurrencyCtrl($scope, $timeout) {

    $scope.rollConfig = {
      filter: 'date',
      filterParam1: 'MMM dd, yyyy - HH:mm:ss'
    };

    var onTimer = function() {
      $scope.timeLeft = new Date();
      tm = $timeout(onTimer, 1000);
    };
    var tm = $timeout(onTimer, 1000);

    $scope.timeLeft = new Date();
  }

})();
