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

    vm.theOtherValue = 12345.67;

    vm.operations = [{
      label: 'Add',
      op: 'add'
    }, {
      label: 'Substract',
      op: 'sub'
    }, {
      label: 'Multiply',
      op: 'mul'
    }];

    vm.changeValue = function() {
      switch (vm.chosenOperation) {
        case 'add':
          vm.theOtherValue = vm.theOtherValue + vm.delta;
          break;
        case 'sub':
          vm.theOtherValue = vm.theOtherValue - vm.delta;
          break;
        case 'mul':
          vm.theOtherValue = vm.theOtherValue * vm.delta;
          break;
      }
    };

  }

})();
