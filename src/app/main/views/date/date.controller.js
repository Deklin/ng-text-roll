(function() {
    'use strict';

    angular
      .module('demoApp')
      .controller('DateDemoController', DateDemoController);

    /** @ngInject */
    function DateDemoController() {
      var vm = this;

      vm.theValue = new Date();

      vm.operations = [{
        label: 'Add',
        op: 'add'
      }, {
        label: 'Substract',
        op: 'sub'
      }];
      vm.chosenOperation = vm.operations[0].op;

      vm.changeValue = function() {
        var val = new Date(vm.theValue.valueOf());
        switch (vm.chosenOperation) {
          case 'add':
            val.setDate(vm.theValue.getDate() + vm.delta);
            break;
          case 'sub':
            val.setDate(vm.theValue.getDate() - vm.delta);
            break;
        }
        vm.theValue = val;
      };

      vm.resetValue = function() {
        vm.theValue = new Date();
      };

      vm.rollConfig = {
        filter: 'date',
        filterParam1: 'MM/dd/yyyy',
        rollBetween: true
      };

    }

})();
