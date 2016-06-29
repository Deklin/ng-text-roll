(function() {
  'use strict';

  angular
    .module('demoApp.currency')
    .controller('MemController', MemController);

  /** @ngInject */
  function MemController(currencySvc) {
    var vm = this;

    vm.svc = currencySvc;

    vm.units = [{
      "description": "quis lacus Odio eu Neque massa nulla erat leo id metus lectus elementum volutpat wisi voluptatem consectetuer in",
      "price": 111.81,
      "title": "Y4CI 32GB RAM - 240-Pin"
    }, {
      "description": "nulla porttitor phasellus volutpat ipsum orci amet aenean ligula justo sit molestie sit ipsum arcu varius id faucibus leo conubia dolor",
      "price": 60.55,
      "title": "SOSB0 16GB RAM - 288-Pin"
    }, {
      "description": "ligula ridiculus laoreet id luctus velit dui integer velit elit sed eu metus tellus vestibulum elit eu justo suspendisse dictumst pede",
      "price": 52.65,
      "title": "O8I 64GB RAM - 240-Pin"
    }, {
      "description": "Nulla tellus nullam erat vel ligula vivamus vel vestibulum vivamus ligula eu voluptatem pellentesque id",
      "price": 48.53,
      "title": "SBN2 64GB RAM - 288-Pin"
    }, {
      "description": "velit dictumst Integer eu massa est molestie cursus nullam ipsum nulla pede vivamus vestibulum et est",
      "price": 59.91,
      "title": "ZDAQM 64GB RAM - 240-Pin"
    }, {
      "description": "lorem Sed nullam neque cursus dolor elementum Odio amet quis volutpat metus tellus ligula",
      "price": 101.63,
      "title": "V9J 16GB RAM - 288-Pin"
    }, {
      "description": "lectus eu arcu pretium ligula vestibulum nunc dui torquent suspendisse lorem orci est vel in ligula pede sed phasellus pretium leo justo Odio ridiculus suspendisse sodales porttitor",
      "price": 71.29,
      "title": "ED0K 32GB RAM - 288-Pin"
    }];

  }

})();
