(function() {
  'use strict';

  angular
    .module('devApp')
    .config(routeConfig);

  function routeConfig($stateProvider) {

    $stateProvider.state('index', {
      url: '',
      views: {
        "demoNumber": {
          templateUrl: 'app/demos/number.html',
          controller: 'numberCtrl'
        },
        "demoCurrency": {
          templateUrl: 'app/demos/currency.html',
          controller: 'currencyCtrl'
        },
        "demoDate": {
          templateUrl: 'app/demos/date.html',
          controller: 'dateCtrl'
        },
        "demoCountDown": {
          templateUrl: 'app/demos/clock.html',
          controller: 'clockCtrl'
        }
      }
    });

  }

})();
