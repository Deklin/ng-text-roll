(function() {
  'use strict';

  angular
    .module('demoApp.currency')
    .controller('CasesController', CasesController);

  /** @ngInject */
  function CasesController(currencySvc) {
    var vm = this;

    vm.svc = currencySvc;

    vm.cases = [{
      "description": "wisi velit lorem eros perspiciatis vivamus hendrerit lectus adipiscing Nulla pede praesent tortor laoreet et",
      "imgId": 8,
      "price": 27,
      "productId": "ZXZAL",
      "title": "44UCYLXGJU Computer Case - Refurbished"
    }, {
      "description": "integer sunt lectus metus aliquam metus pellentesque quis justo sed suspendisse suspendisse aliquam Neque integer torquent Odio turpis",
      "imgId": 9,
      "price": 66,
      "productId": "BLYI2",
      "title": "8HQSBWO8AFG Computer Case - Refurbished"
    }, {
      "description": "Tincidunt integer luctus ipsum perspiciatis Integer magna Lorem est aliquam justo tortor vel ac pretium Neque nunc",
      "imgId": 1,
      "price": 7,
      "productId": "BYVUY",
      "title": "JD1EE939TT Computer Case"
    }, {
      "description": "erat pellentesque torquent orci elit elit et velit lorem vestibulum est nunc integer sed vestibulum hac perspiciatis non nulla eu vel ridiculus Lorem tortor sed vivamus hac",
      "imgId": 5,
      "price": 92,
      "productId": "Q7CFE",
      "title": "IBIZANK Computer Case"
    }, {
      "description": "tellus id eu lacus magna lacus Neque tellus id Nullam vivamus phasellus sed pede velit phasellus Odio",
      "imgId": 7,
      "price": 63,
      "productId": "MJGJV",
      "title": "JZN374W8GKBX1 Computer Case - Refurbished"
    }, {
      "description": "molestie in metus laoreet porttitor lorem tortor laoreet ligula nunc vivamus velit id sodales hac metus id erat elit dolor eu sed consequat integer litora massa interdum molestie est adipiscing Sed ridiculus ipsum leo faucibus",
      "imgId": 4,
      "price": 88,
      "productId": "SJOA8",
      "title": "NMYC3UVI4T7VPJ Computer Case"
    }, {
      "description": "Odio consequat porttitor consequat elit ligula nullam eu id elementum leo elementum est ligula vel gravida Nullam",
      "imgId": 3,
      "price": 50,
      "productId": "UTNRX",
      "title": "8T8BYVZ7 Computer Case - Refurbished"
    }, {
      "description": "laoreet amet metus ridiculus nullam nunc ipsum suspendisse porttitor et amet sem tincidunt sem justo pede ante leo justo tortor Odio sed",
      "imgId": 2,
      "price": 44,
      "productId": "WGXGO",
      "title": "ZPF5WBB2LI8CB Computer Case - Refurbished"
    }, {
      "description": "wisi litora elit neque pede sed leo metus massa interdum velit Nullam velit porttitor vestibulum wisi metus wisi sed lorem sodales quis non",
      "imgId": 6,
      "price": 19,
      "productId": "UR0WI",
      "title": "POORGDVHMYN3 Computer Case"
    }];

  }

})();
