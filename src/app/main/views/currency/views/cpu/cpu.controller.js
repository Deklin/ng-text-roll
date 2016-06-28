(function() {
  'use strict';

  angular
    .module('demoApp.currency')
    .controller('CPUsController', CPUsController);

  /** @ngInject */
  function CPUsController(currencySvc) {
    var vm = this;

    vm.svc = currencySvc;

    vm.cpus = [{
      title: '1.8Ghz CPU',
      price: 123.89,
      desc: ''
    }, {
      title: '2.1Ghz CPU',
      price: 109.32,
      desc: ''
    }, {
      title: '2.2Ghz CPU - Refurbished',
      price: 79.12,
      desc: ''
    }, {
      title: '1.1Ghz CPU - Refurbished',
      price: 56,
      desc: ''
    }, {
      title: '1.0Ghz CPU',
      price: 150.03,
      desc: ''
    }, {
      title: '3.21Ghz CPU',
      price: 893.23,
      desc: ''
    }, {
      title: '3.33Ghz CPU',
      price: 999.99,
      desc: ''
    }];

  }

})();
