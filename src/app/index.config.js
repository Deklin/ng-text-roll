(function() {
  'use strict';

  angular
    .module('demoApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    // Angular Material theme
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('light-blue');
  }

})();
