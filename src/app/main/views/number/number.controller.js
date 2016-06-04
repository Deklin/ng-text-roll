(function() {
  'use strict';

  angular
    .module('demoApp')
    .controller('NumberDemoController', NumberDemoController);

  /** @ngInject */
  function NumberDemoController(demoUtilSvc) {
    var vm = this;

    vm.theValue = demoUtilSvc.getRandomDecimal(100.00, 900.00);
    vm.changeValue = function() {
      vm.theValue = demoUtilSvc.getRandomDecimal(100.00, 900.00);
    }

  }

})();
