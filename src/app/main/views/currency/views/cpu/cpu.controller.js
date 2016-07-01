(function() {
  'use strict';

  angular
    .module('demoApp.currency')
    .controller('CPUsController', CPUsController);

  /** @ngInject */
  function CPUsController(currencySvc) {
    var vm = this;

    vm.svc = currencySvc;

    vm.cpus = [{
      "description": "pede vestibulum integer torquent id sed tortor sodales metus lorem tortor sodales tincidunt sunt interdum erat erat metus suspendisse pretium Nullam placerat erat",
      "imgId": 2,
      "price": 17.6,
      "productId": "HHQ1B",
      "title": "22.9GHz CPU - Refurbished"
    }, {
      "description": "eu erat nunc aenean lectus magna nullam integer adipiscing id leo tortor id",
      "imgId": 1,
      "price": 45.71,
      "productId": "PY39N",
      "title": "97.4GHz CPU"
    }, {
      "description": "justo erat laoreet phasellus cursus justo Neque eros porttitor metus erat metus",
      "imgId": 3,
      "price": 171.77,
      "productId": "417GN",
      "title": "189GHz CPU"
    }, {
      "description": "porttitor amet id voluptatem adipiscing ac conubia turpis vitae luctus vestibulum arcu eu eros pellentesque porttitor id ac eu praesent sodales adipiscing elit Integer lacus phasellus non hendrerit",
      "imgId": 6,
      "price": 2.6,
      "productId": "ND69R",
      "title": "36.5GHz CPU"
    }, {
      "description": "amet consequat id hac sodales faucibus conubia porttitor consectetuer aenean praesent massa massa nulla interdum arcu litora varius conubia",
      "imgId": 5,
      "price": 18.42,
      "productId": "1EF1F",
      "title": "124.8GHz CPU"
    }, {
      "description": "arcu pede est metus integer Nullam velit sodales laoreet pede ac id metus metus vestibulum ante praesent ligula neque tincidunt ridiculus ridiculus Sed volutpat nunc nullam",
      "imgId": 7,
      "price": 0.11,
      "productId": "9KFNH",
      "title": "44GHz CPU"
    }, {
      "description": "molestie ligula litora tincidunt consectetuer neque wisi sodales pellentesque placerat ante Nulla litora hendrerit Tincidunt ac justo eros Lorem tincidunt nunc elit integer id consectetuer Sed",
      "imgId": 4,
      "price": 19.85,
      "productId": "8ZAA9",
      "title": "23.4GHz CPU"
    }];

  }

})();
