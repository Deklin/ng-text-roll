(function() {
  'use strict';

  angular
    .module('demoApp')
    .factory('demoUtilSvc', function() {
      var svc = {};

      svc.getRandomInt = function(min, max) {
        return parseInt((Math.random() * (max - min) + min));
      };

      svc.getRandomDecimal = function(min, max) {
        return parseFloat((Math.random() * (max - min) + min).toFixed(2));
      };

      svc.getRandomDate = function() {
        var inc = parseInt(svc.getRandomDecimal(1, 99));
        var date = new Date();
        date.setDate(date.getDate() + inc);
        return date;
      };

      return svc;
    });

})();
