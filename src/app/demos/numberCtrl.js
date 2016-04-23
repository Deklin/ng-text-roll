(function() {
  'use strict';

  angular
    .module('devApp')
    .controller('numberCtrl', NumberCtrl);

  /** @ngInject */
  function NumberCtrl($scope, demoSvc) {

    $scope.calc = {
      operator: 'add',
      delta: demoSvc.getRandomInt(1, 100)
    };

    $scope.updateNumeric = function() {
      var val = $scope.numericValue;
      switch ($scope.calc.operator) {
        case 'add':
          val += $scope.calc.delta;
          break;
        case 'substract':
          val -= $scope.calc.delta;
          break;
        case 'multiply':
          val *= $scope.calc.delta;
          break;
        default:
          break;
      }
      $scope.numericValue = val;
    };

    $scope.changeDelta = function() {
      $scope.calc.delta = demoSvc.getRandomInt(1, 100);
    };

    $scope.numericValue = demoSvc.getRandomInt(1, 400);

  }

})();
