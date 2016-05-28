(function() {
  'use strict';

  angular
    .module('demoApp')
    .controller('NumberDemoController', NumberDemoController);

  /** @ngInject */
  function NumberDemoController(demoUtilSvc) {
    var vm = this;

    vm.theValue = demoUtilSvc.getRandomDecimal(10.00, 200.00);
    vm.changeValue = function() {
      vm.theValue = demoUtilSvc.getRandomDecimal(10.00, 200.00);
    }

  }

})();
