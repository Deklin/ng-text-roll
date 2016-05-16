(function() {
  'use strict';

  angular
    .module('devApp')
    .controller('demosCtrl', DemosCtrl);

  /** @ngInject */
  function DemosCtrl($scope) {

    var viewNames = ['demoNumber', 'demoCurrency', 'demoDate', 'demoCountDown'];

    $scope.slides = [];
    for (var i = 0; i < viewNames.length; i++) {
      $scope.slides.push({
        id: i,
        namedView: viewNames[i]
      });
    }

  }

})();
