(function() {
  'use strict';

  angular
    .module('demoApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('main.currency', {
        templateUrl: 'app/main/views/currency/currency.html',
        controller: 'CurrencyDemoController',
        controllerAs: 'currency'
      }).state('main.currency.case', {
        url: '/currency/case',
        templateUrl: 'app/main/views/currency/views/case/case.html',
        controller: 'CasesController',
        controllerAs: 'case'
      }).state('main.currency.cpu', {
        url: '/currency/cpu',
        templateUrl: 'app/main/views/currency/views/cpu/cpu.html',
        controller: 'CPUsController',
        controllerAs: 'cpu'
      }).state('main.currency.mem', {
        url: '/currency/mem',
        templateUrl: 'app/main/views/currency/views/mem/mem.html',
        controller: 'MemController',
        controllerAs: 'mem'
      }).state('main.currency.storage', {
        url: '/currency/storage',
        templateUrl: 'app/main/views/currency/views/storage/storage.html',
        controller: 'StorageController',
        controllerAs: 'storage'
      });
  }

})();
