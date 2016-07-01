(function() {
  'use strict';

  angular
    .module('demoApp')
    .controller('CurrencyDemoController', CurrencyDemoController);

  /** @ngInject */
  function CurrencyDemoController($state, currencySvc) {
    var vm = this;

    vm.tabs = [{
      title: 'Cases',
      stateName: 'main.currency.case'
    }, {
      title: 'CPUs',
      stateName: 'main.currency.cpu'
    }, {
      title: 'Memory',
      stateName: 'main.currency.mem'
    }, {
      title: 'Hard-Drives',
      stateName: 'main.currency.storage'
    }];

    var setSelectedTab = function() {
      angular.forEach(vm.tabs, function(item, inx) {
        if (item.stateName === $state.current.name) {
          vm.selectedTab = inx;
        }
      });
    };
    setSelectedTab();

    vm.svc = currencySvc;
    vm.rollConfig = {
      filter: 'currency'
    };

  }

})();