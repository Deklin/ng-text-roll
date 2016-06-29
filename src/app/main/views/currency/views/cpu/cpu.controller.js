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
      "description": "amet velit eros Integer Integer molestie id Neque ac torquent perspiciatis varius consequat velit id",
      "price": 0.8,
      "title": "8.2GHz CPU - Refurbished"
    }, {
      "description": "neque elit hendrerit eu quis id quis id lacus nunc praesent dictumst erat pretium consequat eu lacus nunc eu eu luctus Integer Tincidunt metus tellus eu massa vitae eros eu lectus porttitor",
      "price": 14.5,
      "title": "84.7GHz CPU - Refurbished"
    }, {
      "description": "ligula ligula Sed sodales ac nulla est leo amet hendrerit velit nunc sunt non varius erat faucibus consectetuer cursus tortor placerat tellus Neque et",
      "price": 8.55,
      "title": "10.1GHz CPU - Refurbished"
    }, {
      "description": "dui arcu arcu ligula Sed vel Odio sed phasellus voluptatem justo sed Integer massa hac gravida turpis turpis sed eu est leo vitae eros",
      "price": 61.05,
      "title": "131.1GHz CPU"
    }, {
      "description": "aenean lacus lacus pede vitae sed dictumst molestie in arcu consequat dui nullam vestibulum amet est ligula accumsan elementum phasellus",
      "price": 188.23,
      "title": "264.7GHz CPU - Refurbished"
    }, {
      "description": "molestie porttitor metus erat metus laoreet integer hac dolor pede nulla luctus amet quis",
      "price": 37.16,
      "title": "110.7GHz CPU - Refurbished"
    }, {
      "description": "vivamus elit lacus voluptatem sunt ligula ligula nulla non id erat sed est pede ac Sed lorem metus pretium elit elit hendrerit lacus id vel orci pede aliquam voluptatem est ridiculus vivamus dolor integer tortor",
      "price": 22.16,
      "title": "202.3GHz CPU - Refurbished"
    }];

  }

})();
