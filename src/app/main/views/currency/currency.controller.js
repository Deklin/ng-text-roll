(function() {
  'use strict';

  angular
    .module('demoApp')
    .controller('CurrencyDemoController', CurrencyDemoController);

  /** @ngInject */
  function CurrencyDemoController($state, currencySvc) {
    var vm = this;

    vm.actions = [{
      title: 'Cases',
      stateName: 'main.currency.case',
      icon: 'work'
    }, {
      title: 'CPUs',
      stateName: 'main.currency.cpu',
      icon: 'select_all'
    }, {
      title: 'Memory',
      stateName: 'main.currency.mem',
      icon: 'sd_card'
    }, {
      title: 'Hard-Drives',
      stateName: 'main.currency.storage',
      icon: 'storage'
    }];

    var setSelectedButton = function() {
      if ($state.current.name === 'main.currency.cart') {
        vm.selectedButton = vm.actions.length;
        return;
      }
      angular.forEach(vm.actions, function(item, inx) {
        if (item.stateName === $state.current.name) {
          vm.selectedButton = inx;
          return;
        }
      });
    };
    setSelectedButton();

    vm.svc = currencySvc;
    vm.rollConfig = {
      filter: 'currency'
    };

    vm.openMenu = function($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };

    vm.navFromMenu = function(stateName) {
      $state.go(stateName);
    };

  }

})();
