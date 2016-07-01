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
      "description": "eu Odio tortor Odio in amet molestie laoreet conubia sed ac pellentesque lectus consequat interdum amet massa Tincidunt nunc ipsum tellus litora adipiscing dolor torquent leo suspendisse dolor velit",
      "imgId": 2,
      "price": 43.37,
      "productId": "NHWWL",
      "title": "1TB Desktop Hard Disk"
    }, {
      "description": "tellus luctus amet neque lacus consectetuer id molestie non Nullam Lorem vestibulum nunc aliquam tortor lectus quis justo elementum sem quis neque gravida litora eu praesent velit ligula lorem phasellus",
      "imgId": 6,
      "price": 101.57,
      "productId": "ACW3Z",
      "title": "2TB Desktop Hard Disk"
    }, {
      "description": "orci arcu sem eu dolor luctus pede neque Nulla ligula vitae Sed perspiciatis",
      "imgId": 3,
      "price": 88.85,
      "productId": "6KM5Q",
      "title": "2TB Desktop Hard Disk"
    }, {
      "description": "amet eu nunc ligula consequat ac id elementum eu porttitor elit ligula ac metus Tincidunt lorem nunc ligula voluptatem tellus tincidunt sunt ipsum nunc metus sodales accumsan turpis sed velit ligula eu integer tortor placerat",
      "imgId": 6,
      "price": 7.93,
      "productId": "EV5W6",
      "title": "1TB Desktop Hard Disk"
    }, {
      "description": "voluptatem accumsan wisi Neque laoreet sed massa Lorem eu eu erat amet adipiscing praesent eros ligula velit eros aenean sit massa velit id Nulla laoreet quis amet Odio eu velit dui",
      "imgId": 6,
      "price": 33.02,
      "productId": "W4CAL",
      "title": "1TB Desktop Hard Disk"
    }, {
      "description": "lectus torquent magna eu Nullam est Odio eros amet consequat sed id ligula tellus eros voluptatem elit vivamus porttitor nulla",
      "imgId": 5,
      "price": 61.24,
      "productId": "UVJWQ",
      "title": "2TB Desktop Hard Disk"
    }];

  }

})();
