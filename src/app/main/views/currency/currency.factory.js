(function() {
  'use strict';

  angular
    .module('demoApp.currency')
    .factory('currencySvc', function(demoUtilSvc) {
      var svc = {};

      svc.cart = [];
      svc.totalPrice = 0;

      svc.addToCart = function(item) {
//console.log('asdf')
        svc.cart.push(item);
        calcTotalPrice();
      };

      var calcTotalPrice = function() {
        svc.totalPrice = 0;
        angular.forEach(svc.cart, function(item) {
          svc.totalPrice += item.price;
        });
      };

      svc.foo = function() {
        return demoUtilSvc.getRandomInt(2, 33);
      }

      return svc;
    });

})();
