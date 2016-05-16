(function() {
  'use strict';

  angular
    .module('devApp')
    .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/demos");

    $stateProvider
      .state('index', {
        templateUrl: 'app/views/demos.html',
        controller: 'demosCtrl',
        controllerAs: 'demos'
      })
      .state('index.demos', {
        url: '/demos',
        views: {
          'demoNumber': {
            templateUrl: 'app/views/demos/number.html',
            controller: 'numberCtrl'
          },
          'demoCurrency': {
            templateUrl: 'app/views/demos/currency.html',
            controller: 'currencyCtrl'
          },
          'demoDate': {
            templateUrl: 'app/views/demos/date.html',
            controller: 'dateCtrl'
          },
          'demoCountDown': {
            templateUrl: 'app/views/demos/clock.html',
            controller: 'clockCtrl'
          }
        }
      });

  }

})();
