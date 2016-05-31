(function() {
  'use strict';

  angular
    .module('demoApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($mdSidenav, $timeout, $rootScope, $scope /*$timeout, webDevTec, toastr*/ ) {
    var vm = this;

    vm.demoMenuItems = [{
        label: 'Introduction',
        stateName: 'main.intro'
      }, {
        label: 'Number',
        stateName: 'main.number'
      }
      /*{ label: 'Currency', stateName: 'currency' },
            { label: 'Date', stateName: 'date' }*/
    ];
    vm.demoMenuInx = 0;

    vm.openNav = function() {
      $timeout(function() {
        $mdSidenav('left').open();
      });
    };

    var locChgSuc = $rootScope.$on('$locationChangeSuccess', function() {
      $timeout(function() {
        $mdSidenav('left').close();
      });
    });

    $scope.$on('$destroy', function() {
      if (locChgSuc) {
        locChgSuc();
      }
    });

    //   var vm = this;
    //
    //   vm.awesomeThings = [];
    //   vm.classAnimation = '';
    //   vm.creationDate = 1463661750758;
    //   vm.showToastr = showToastr;
    //
    //   activate();
    //
    //   function activate() {
    //     getWebDevTec();
    //     $timeout(function() {
    //       vm.classAnimation = 'rubberBand';
    //     }, 4000);
    //   }
    //
    //   function showToastr() {
    //     toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //     vm.classAnimation = '';
    //   }
    //
    //   function getWebDevTec() {
    //     vm.awesomeThings = webDevTec.getTec();
    //
    //     angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //       awesomeThing.rank = Math.random();
    //     });
    //   }
  }

})();
