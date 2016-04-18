(function() {
  'use strict';

  angular
    .module('devApp')
    .controller('clockCtrl', CurrencyCtrl);

  /** @ngInject */
  function CurrencyCtrl($scope, $timeout, demoSvc) {

    $scope.rollConfig = {
      filter: 'date',
      filterParams: 'MMM dd, yyyy - HH:mm:ss'
    };

    var onTimer = function() {
      $scope.timeLeft = new Date();
      tm = $timeout(onTimer, 1000);
    };
    var tm = $timeout(onTimer, 1000);

    $scope.timeLeft = new Date();
  }

})();
