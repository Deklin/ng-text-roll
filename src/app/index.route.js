(function() {
  'use strict';

  angular
    .module('demoApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/intro');

    $stateProvider
      .state('main', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('main.intro', {
        url: '/intro',
        templateUrl: 'app/main/views/intro/intro.html',
        controller: 'IntroController',
        controllerAs: 'intro'
      })
      .state('main.number', {
        url: '/number',
        templateUrl: 'app/main/views/number/number.html',
        controller: 'NumberDemoController',
        controllerAs: 'number'
      }).state('main.date', {
        url: '/date',
        templateUrl: 'app/main/views/date/date.html',
        controller: 'DateDemoController',
        controllerAs: 'date'
      });

    // $stateProvider
    //   .state('main', {
    //     templateUrl: 'app/main/main.html',
    //     controller: 'MainController',
    //     controllerAs: 'main'
    //   })
    //   .state('main.demos', {
    //     url: '/demos',
    //     views: {
    //       'numberDemo': {
    //         templateUrl: 'app/main/demos/number/number.html',
    //         controller: 'NumberDemoController',
    //         controllerAs: 'number'
    //       }
    //     }
    //   });

  }

})();
