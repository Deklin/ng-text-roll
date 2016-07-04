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
      "description": "suspendisse erat torquent ligula sodales sodales consequat gravida lacus litora lorem tellus hendrerit sit vestibulum tortor metus massa vel lectus porttitor metus nunc tortor ipsum justo Tincidunt amet",
      "imgId": 1,
      "price": 2.39,
      "category": "Memory",
      "title": "1DQ 8GB RAM - 288-Pin"
    }, {
      "description": "arcu molestie aliquam praesent id amet lectus pretium neque magna suspendisse erat erat volutpat arcu lacus Integer nullam vestibulum orci sem quis accumsan voluptatem tellus sodales ligula accumsan voluptatem interdum",
      "imgId": 5,
      "price": 71.95,
      "category": "Memory",
      "title": "NST 32GB RAM - 288-Pin"
    }, {
      "description": "integer ligula litora Lorem tortor molestie suspendisse volutpat amet elementum laoreet arcu",
      "imgId": 4,
      "price": 12.32,
      "category": "Memory",
      "title": "VQ4T 32GB RAM - 288-Pin"
    }, {
      "description": "aenean velit eu eu ac faucibus magna dui Sed eros ipsum pellentesque nullam amet torquent lorem vivamus",
      "imgId": 2,
      "price": 12.97,
      "category": "Memory",
      "title": "62M 16GB RAM - 288-Pin"
    }, {
      "description": "amet ante adipiscing massa pretium Odio amet metus Tincidunt turpis nullam quis sed molestie ac aliquam nunc id consequat tortor velit vestibulum vel luctus erat eu molestie porttitor tincidunt adipiscing volutpat orci in",
      "imgId": 7,
      "price": 17.16,
      "category": "Memory",
      "title": "AOXV 16GB RAM - 288-Pin"
    }, {
      "description": "ipsum elit placerat sem neque lacus et ipsum pellentesque metus id non justo ipsum sed hendrerit amet molestie hac molestie interdum Sed elit est perspiciatis id pretium",
      "imgId": 3,
      "price": 50.97,
      "category": "Memory",
      "title": "UBED 32GB RAM - 288-Pin"
    }, {
      "description": "eu eros pretium elementum accumsan conubia Lorem vestibulum interdum molestie eu consequat dui est molestie leo arcu",
      "imgId": 6,
      "price": 50.68,
      "category": "Memory",
      "title": "WVST1 32GB RAM - 288-Pin"
    }];

  }

})();
