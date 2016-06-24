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
      stateName: 'main.currency.case'
    }];
    vm.demoMenuInx = 0;

    var getLabel = function() {
      angular.forEach(vm.demoMenuItems, function(item, inx) {
        if (item.stateName === $state.current.name) {
          vm.currentLabel = item.label;
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
