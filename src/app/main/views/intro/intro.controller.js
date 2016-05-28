(function() {
  'use strict';

  angular
    .module('demoApp')
    .controller('IntroController', IntroController);

  /** @ngInject */
  function IntroController($scope, $timeout, demoUtilSvc) {
    var vm = this;
    vm.lower = 10000000;
    vm.upper = 50000000;
    vm.time = 1000;
    vm.theValue = demoUtilSvc.getRandomInt(vm.lower, vm.upper);

    var tm;
    var onTimer = function() {
      vm.theValue = demoUtilSvc.getRandomInt(vm.lower, vm.upper);
      vm.time = demoUtilSvc.getRandomInt(2000, 3000);
      tm = $timeout(onTimer, vm.time);
    };
    tm = $timeout(onTimer, vm.time);

    $scope.$on('$destroy', function() {
      if (tm) {
        $timeout.cancel(tm);
      }
    });
  }

})();
