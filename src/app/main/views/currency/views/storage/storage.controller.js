(function() {
  'use strict';

  angular
    .module('demoApp.currency')
    .controller('StorageController', StorageController);

  /** @ngInject */
  function StorageController(currencySvc) {
    var vm = this;

    vm.svc = currencySvc;

    vm.drives = [{
      "description": "quis Neque vitae vel Nullam amet eu Sed ligula ac cursus Nulla non nunc id consequat phasellus sed pede wisi pellentesque arcu eros amet dui neque justo ante perspiciatis sem nunc turpis ridiculus non arcu vestibulum",
      "price": 28.74,
      "title": "1TB Desktop Hard Disk"
    }, {
      "description": "Nulla Neque volutpat metus magna suspendisse justo eu dictumst ligula est eros ac eu hendrerit aenean pede sunt pellentesque massa arcu ligula dolor praesent hac torquent sodales Lorem Nulla arcu",
      "price": 78.11,
      "title": "1TB Desktop Hard Disk"
    }, {
      "description": "torquent justo Integer voluptatem perspiciatis conubia justo molestie leo non luctus sodales ridiculus ligula suspendisse cursus",
      "price": 63.09,
      "title": "3TB Desktop Hard Disk"
    }, {
      "description": "porttitor Nulla Sed molestie laoreet nunc laoreet justo ligula sit pellentesque hendrerit nulla tincidunt sodales Integer ac justo placerat",
      "price": 129.32,
      "title": "1TB Desktop Hard Disk"
    }, {
      "description": "sem Integer metus erat perspiciatis ante neque eu in Sed amet Odio eu vestibulum nunc pede neque Tincidunt Tincidunt velit phasellus pede quis voluptatem amet Nulla",
      "price": 45.75,
      "title": "1TB Desktop Hard Disk"
    }, {
      "description": "et arcu ac eros vel varius faucibus turpis dictumst sodales amet pellentesque sem vivamus ligula sodales volutpat ipsum leo tortor sem gravida Tincidunt nunc perspiciatis aliquam ligula metus et",
      "price": 32.02,
      "title": "3TB Desktop Hard Disk"
    }];

  }

})();
