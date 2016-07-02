(function() {
  'use strict';

  angular
    .module('demoApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($mdSidenav, $timeout, $rootScope, $scope, $state) {
    var vm = this;

    vm.demoMenuItems = [{
      label: 'Introduction',
      stateName: 'main.intro'
    }, {
      label: 'Number',
      stateName: 'main.number'
    }, {
      label: 'Date',
      stateName: 'main.date'
    }, {
      label: 'Currency',
      subLabel: 'Cases',
      stateName: 'main.currency.case'
    }, {
      label: 'Currency',
      subLabel: 'CPUs',
      stateName: 'main.currency.cpu',
      hide: true
    }, {
      label: 'Currency',
      subLabel: 'Hard-Drives',
      stateName: 'main.currency.storage',
      hide: true
    }, {
      label: 'Currency',
      subLabel: 'Memory',
      stateName: 'main.currency.mem',
      hide: true
    }];
    vm.demoMenuInx = 0;

    var getLabel = function() {
      angular.forEach(vm.demoMenuItems, function(item, inx) {
        if (item.stateName === $state.current.name) {
          vm.currentLabel = item.label;
          vm.currentSubLabel = item.subLabel;
          vm.demoMenuInx = inx;
          return true;
        }
      });
    };
    getLabel();

    vm.openNav = function() {
      $timeout(function() {
        $mdSidenav('left').open();
      });
    };

    var locationChangeSuccessEvent = $rootScope.$on('$locationChangeSuccess', function() {
      getLabel();
      $timeout(function() {
        $mdSidenav('left').close();
      });
    });

    $scope.$on('$destroy', function() {
      if (locationChangeSuccessEvent) {
        locationChangeSuccessEvent();
      }
    });

  }

})();
