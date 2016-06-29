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
      "description": "Tincidunt amet praesent amet in est massa amet Nulla Nulla molestie molestie phasellus ipsum placerat dui dui Sed id sodales vel vestibulum sed Neque Nulla lectus metus",
      "price": 22,
      "title": "6JRRS5WBDM19 Computer Case"
    }, {
      "description": "varius velit elit luctus ac interdum erat eu orci gravida luctus Integer vitae gravida leo tincidunt hac velit hendrerit vestibulum porttitor amet vestibulum lectus eros Neque metus tortor placerat lectus integer",
      "price": 70,
      "title": "E9TIS3L48H5FI Computer Case"
    }, {
      "description": "erat porttitor consectetuer lectus litora quis ante torquent est velit non justo id ac perspiciatis Neque non vestibulum vitae id sit interdum sunt est eu ac metus metus",
      "price": 92,
      "title": "PJ05PTQH1BIM Computer Case - Refurbished"
    }, {
      "description": "luctus erat sed quis et amet integer justo wisi massa metus wisi sed molestie conubia arcu arcu id",
      "price": 41,
      "title": "XXKPGOXEM95Y Computer Case"
    }, {
      "description": "vestibulum phasellus gravida vestibulum amet torquent Odio vitae sem eu dui sed Integer sem",
      "price": 20,
      "title": "S1FX1UB57VM Computer Case"
    }, {
      "description": "Nulla amet vestibulum erat elit leo non dui arcu vitae est id erat pede voluptatem non sit ipsum vestibulum",
      "price": 39,
      "title": "2DWB0ZZ03KAI23 Computer Case"
    }, {
      "description": "pretium laoreet Integer ipsum ipsum pretium integer torquent interdum suspendisse sed praesent",
      "price": 19,
      "title": "NTYUB5U Computer Case"
    }, {
      "description": "integer porttitor Sed ante placerat neque suspendisse litora litora gravida integer adipiscing phasellus ridiculus ligula velit eu lacus sodales vestibulum neque vel leo Lorem",
      "price": 19,
      "title": "FBN3B1ACD Computer Case"
    }, {
      "description": "vestibulum wisi sem vitae eros volutpat velit consequat eu turpis et justo pellentesque massa elit erat Sed amet vestibulum turpis justo litora id arcu faucibus est arcu eu dolor",
      "price": 57,
      "title": "IOAOHRLK76NE Computer Case - Refurbished"
    }];

  }

})();
