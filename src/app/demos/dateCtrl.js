(function() {
  'use strict';

  angular
    .module('devApp')
    .controller('dateCtrl', DateCtrl);

  /** @ngInject */
  function DateCtrl($scope, demoSvc) {

    $scope.calc = {
      operator: 'add'
    };

    $scope.rollConfig = {
      filter: 'date',
      filterParams: 'MM/dd/yyyy',
      rollAll: true
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

    $scope.changeAmt = function() {
      $scope.calc.amount = demoSvc.getRandomInt(1, 16);
    };

    $scope.dateValue = demoSvc.getRandomDate();
    $scope.calc.amount = demoSvc.getRandomInt(1, 16);

  }

})();
