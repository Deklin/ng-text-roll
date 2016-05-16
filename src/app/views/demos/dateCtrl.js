(function() {
  'use strict';

  angular
    .module('devApp')
    .controller('dateCtrl', DateCtrl);

  /** @ngInject */
  function DateCtrl($scope, demoSvc) {

    $scope.calc = {
      operator: 'add',
      delta:  demoSvc.getRandomInt(1, 16)
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
          val.setDate($scope.dateValue.getDate() + $scope.calc.delta);
          break;
        case 'substract':
          val.setDate($scope.dateValue.getDate() - $scope.calc.delta);
          break;
        default:
          break;
      }
      $scope.dateValue = val;
    };

    $scope.changeDelta = function() {
      $scope.calc.delta = demoSvc.getRandomInt(1, 16);
    };

    $scope.dateValue = demoSvc.getRandomDate();

  }

})();
