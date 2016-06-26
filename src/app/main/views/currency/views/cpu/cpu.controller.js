(function() {
  'use strict';

  angular
    .module('demoApp.currency')
    .controller('CPUsController', CPUsController);

  /** @ngInject */
  function CPUsController() {
    var vm = this;

    vm.cpus = [{
      title: '1.8Ghz CPU',
      price: 123.89
    }, {
      title: '2.1Ghz CPU',
      price: 209.32
    }, {
      title: '2.1Ghz CPU',
      price: 209.32
    }, {
      title: '2.1Ghz CPU',
      price: 209.32
    }, {
      title: '2.1Ghz CPU',
      price: 209.32
    }, {
      title: '2.1Ghz CPU',
      price: 209.32
    }, {
      title: '2.1Ghz CPU',
      price: 209.32
    }];

  }

})();
