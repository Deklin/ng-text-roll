(function() {
  'use strict';

  angular
    .module('demoApp.currency')
    .controller('CPUsController', CPUsController);

  /** @ngInject */
  function CPUsController() {
    var vm = this;

    vm.foo = 897;

  }

})();
