(function() {
  'use strict';

  angular
    .module('demoApp.currency')
    .factory('currencySvc', function(demoUtilSvc) {
      var svc = {};

      svc.cart = [];
      svc.totalPrice = 0;

      svc.addToCart = function(item) {
        svc.cart.push(item);
        calcTotalPrice(item, true);
      };

      svc.removeFromCart = function(item) {
        var inx = svc.cart.indexOf(item);
        svc.cart.splice(inx, 1);
        calcTotalPrice(item);
      };

      var calcTotalPrice = function(item, add) {
        if (add) {
          svc.totalPrice += item.price;
        } else {
          svc.totalPrice -= item.price;
        }
      };

      svc.foo = function() {
        return demoUtilSvc.getRandomInt(2, 33);
      }

      return svc;
    });

})();
