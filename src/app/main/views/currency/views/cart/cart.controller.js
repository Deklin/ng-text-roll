(function() {
  'use strict';

  angular
    .module('demoApp.currency')
    .controller('CartController', CartController);

  /** @ngInject */
  function CartController(currencySvc) {
    var vm = this;

    vm.svc = currencySvc;

    

  }

})();
