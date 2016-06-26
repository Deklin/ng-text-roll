(function() {
  'use strict';

  angular
    .module('demoApp')
    .controller('CurrencyDemoController', CurrencyDemoController);

  /** @ngInject */
  function CurrencyDemoController($state) {
    var vm = this;

    vm.tabs = [{
      title: 'Cases',
      stateName: 'main.currency.case'
    }, {
      title: 'CPUs',
      stateName: 'main.currency.cpu'
    }];

    var setSelectedTab = function() {
      angular.forEach(vm.tabs, function(item, inx) {
        if (item.stateName === $state.current.name) {
          vm.selectedTab = inx;
        }
      });
    };
    setSelectedTab();

  }

})();
