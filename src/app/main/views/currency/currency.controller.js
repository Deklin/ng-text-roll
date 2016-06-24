(function() {
  'use strict';

  angular
    .module('demoApp')
    .controller('CurrencyDemoController', CurrencyDemoController);

  /** @ngInject */
  function CurrencyDemoController( /*$scope, $timeout*/ ) {
    var vm = this;

    vm.tabs = [{
      title: 'Cases',
      stateName: 'main.currency.case'
    }, {
      title: 'CPUs',
      stateName: 'main.currency.cpu'
    }];

  }

})();
