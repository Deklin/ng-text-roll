(function() {
  'use strict';

  angular
    .module('demoApp.currency')
    .controller('CasesController', CasesController);

  /** @ngInject */
  function CasesController() {
    var vm = this;

    vm.foo = 123;

  }

})();
