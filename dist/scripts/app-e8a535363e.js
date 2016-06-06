!function(){"use strict";angular.module("demoApp",["ngAnimate","ngAria","ui.router","ngMaterial","ui.ngTextRoll","hljs"])}(),function(){"use strict";function e(e){var t=this;t.theValue=e.getRandomDecimal(100,900),t.changeValue=function(){t.theValue=e.getRandomDecimal(100,900)}}e.$inject=["demoUtilSvc"],angular.module("demoApp").controller("NumberDemoController",e)}(),function(){"use strict";function e(e,t,n){var o=this;o.lower=1e7,o.upper=5e7,o.time=1e3,o.theValue=n.getRandomInt(o.lower,o.upper);var a,r=function(){o.theValue=n.getRandomInt(o.lower,o.upper),o.time=n.getRandomInt(2e3,3e3),a=t(r,o.time)};a=t(r,o.time),e.$on("$destroy",function(){a&&t.cancel(a)})}e.$inject=["$scope","$timeout","demoUtilSvc"],angular.module("demoApp").controller("IntroController",e)}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("demoApp").service("webDevTec",e)}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}e.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("demoApp").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){function t(t,n,o,a){var r,i=e(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){i.type(e).pause()["delete"]()}),r=t.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(e){i.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){r()})}function n(e,t){function n(){return o().then(function(){e.info("Activated Contributors View")})}function o(){return t.getContributors(10).then(function(e){return a.contributors=e,a.contributors})}var a=this;a.contributors=[],n()}n.$inject=["$log","githubContributor"];var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:n,controllerAs:"vm"};return o}e.$inject=["malarkey"],angular.module("demoApp").directive("acmeMalarkey",e)}(),function(){"use strict";function e(e,t){function n(n){function a(e){return e.data}function r(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return n||(n=30),t.get(o+"/contributors?per_page="+n).then(a)["catch"](r)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:o,getContributors:n};return a}e.$inject=["$log","$http"],angular.module("demoApp").factory("githubContributor",e)}(),function(){"use strict";angular.module("demoApp").factory("demoUtilSvc",function(){var e={};return e.getRandomInt=function(e,t){return parseInt(Math.random()*(t-e)+e)},e.getRandomDecimal=function(e,t){return parseFloat((Math.random()*(t-e)+e).toFixed(2))},e.getRandomDate=function(){var t=parseInt(e.getRandomDecimal(1,99)),n=new Date;return n.setDate(n.getDate()+t),n},e})}(),function(){"use strict";function e(e,t,n,o,a){var r=this;r.demoMenuItems=[{label:"Introduction",stateName:"main.intro"},{label:"Number",stateName:"main.number"}],r.demoMenuInx=0;var i=function(){angular.forEach(r.demoMenuItems,function(e){return e.stateName===a.current.name?(r.currentLabel=e.label,!0):void 0})};i(),r.openNav=function(){t(function(){e("left").open()})};var l=n.$on("$locationChangeSuccess",function(){i(),t(function(){e("left").close()})});o.$on("$destroy",function(){l&&l()})}e.$inject=["$mdSidenav","$timeout","$rootScope","$scope","$state"],angular.module("demoApp").controller("MainController",e)}(),function(){"use strict"}(),function(){"use strict";function e(e,t){t.otherwise("/intro"),e.state("main",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("main.intro",{url:"/intro",templateUrl:"app/main/views/intro/intro.html",controller:"IntroController",controllerAs:"intro"}).state("main.number",{url:"/number",templateUrl:"app/main/views/number/number.html",controller:"NumberDemoController",controllerAs:"number"})}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("demoApp").config(e)}(),function(){"use strict";angular.module("demoApp").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e){e.debugEnabled(!0)}e.$inject=["$logProvider"],angular.module("demoApp").config(e)}(),angular.module("demoApp").run(["$templateCache",function(e){e.put("app/main/main.html",'<!-- main side bar --><md-sidenav class="md-sidenav-left md-whiteframe-z2 hide-print md-closed md-locked-open" md-is-locked-open="$mdMedia(\'gt-sm\')" md-component-id=left><header><a class=main-logo href=https://daveteply.github.io/ng-text-roll/dist/ ><img src=assets/images/ngTextRoll.png alt="ngTextRoll Logo"><h1>ngTextRoll</h1></a></header><md-content class="demo-navigation flex" role=navigation><ul class=demo-nav-header><li><a md-ink-ripple=#3F51B5 class="md-button md-ink-ripple nav-header-item" ui-sref={{main.demoMenuItems[0].stateName}} ng-click="main.demoMenuInx = 0"><span>{{main.demoMenuItems[0].label}}</span></a></li><li><div class=demo-nav-section-header>Demos</div><ul><li ng-repeat="menuItem in main.demoMenuItems" ng-if="$index > 0"><a md-ink-ripple=#3F51B5 class="md-button md-ink-ripple" ui-sref={{menuItem.stateName}} ng-click="main.demoMenuInx = $index">{{menuItem.label}}</a></li></ul></li></ul></md-content></md-sidenav><!-- end main side bar --><!-- main content --><div class="layout-column flex demo-main-content" layout=column role=main><md-toolbar class=md-whiteframe-glow-z1><div class="md-toolbar-tools demo-main-tools"><button class="md-icon-button md-button md-link-ripple hide-gt-sm" ng-click=main.openNav()><i class=material-icons>menu</i></button><div class="fill-height layout-row flex"><h2 class="md-toolbar-item md-breadcrumb md-headline">{{main.currentLabel}}</h2><span class=flex flex=""></span><div class="md-toolbar-item layout-row" layout=row><a class="md-icon-button md-button ng-scope md-ink-ripple" href=https://github.com/daveteply/ng-text-roll aria-label="View Source on Github" target=_blank><img src=assets/images/GitHub-Mark-32px.png alt=""><md-tooltip md-direction=left>View Source on Github</md-tooltip></a></div></div></div></md-toolbar><md-content class="layout-column flex" md-scroll-y="" layout=column><div class="layout-padding ng-scope flex-noshrink" flex=noshrink><div class=demo-content-block ui-view></div></div><div class="layout-row flex-noshrink demo-footer" layout=row flex=noshrink>Code licensed under the MIT License.</div></md-content></div><!-- end main content --> <!-- <div layout="vertical" layout-fill>\n\n  <md-content>\n    <header>\n      <acme-navbar creation-date="main.creationDate"></acme-navbar>\n    </header>\n\n\n    <section class="jumbotron">\n      <h1>\'Allo, \'Allo!</h1>\n      <p class="lead">\n        <img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>\n        Always a pleasure scaffolding your apps.\n      </p>\n      <md-button class="md-raised animated infinite" ng-class="main.classAnimation" ng-click="main.showToastr()">Splendid Toastr</md-button>\n      <p>\n        With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey>\n      </p>\n    </section>\n\n    <div class="techs" layout-align="center">\n      <md-card ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'">\n        <md-card-content>\n          <img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}">\n          <h3 class="md-title">{{ awesomeThing.title }}</h3>\n          <p>{{ awesomeThing.description }}</p>\n        </md-card-content>\n        <div class="md-action-buttons">\n          <md-button ng-href="{{ awesomeThing.url }}">Website</md-button>\n        </div>\n      </md-card>\n    </div>\n  </md-content>\n\n</div> -->'),e.put("app/components/navbar/navbar.html",'<md-toolbar layout=row layout-align="center center"><md-button href=https://github.com/Swiip/generator-gulp-angular>Gulp Angular</md-button><section flex layout=row layout-align="left center"><md-button href=# class=md-raised>Home</md-button><md-button href=# class=md-raised>About</md-button><md-button href=# class=md-raised>Contact</md-button></section><md-button class=acme-navbar-text>Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>'),e.put("app/main/views/intro/intro.html","<h2>What is ngTextRoll?</h2><p>With today's very dynamic web experience, elements and text on a page can change frequently. ngTextRoll is an <a href=https://angularjs.org/ target=_blank>AngularJS</a> <a href=https://docs.angularjs.org/guide/component target=_blank>component</a> designed to help draw attention to these types of changes.</p><div class=\"layout-align-center layout-row\"><ng-text-roll class=intro-demo target=intro.theValue></ng-text-roll></div><h2>Installation</h2><p><ol><li>Install via <a href=http://bower.io/ target=_blank>Bower</a></li><div hljs hljs-no-escape>>$ bower install ng-text-roll</div><li>Add the ngTextRoll module</li><div hljs>angular.module('myApp', ['ui.ngTextRoll'])</div><li>Use the component</li><p>\r\n      Markup:\r\n      <div hljs hljs-language=\"HTML\">\r\n<ng-text-roll target=\"theValue\"></ng-text-roll></div>\r\n    </p> JS:\r\n    <div hljs hljs-language=\"JavaScript\">\r\nangular\r\n  .module('demoApp')\r\n  .controller('IntroController',\r\n    function($scope) {\r\n      $scope.theValue = 123;\r\n    });</ol></p><p>Check out the <a href=https://github.com/daveteply/ng-text-rol>GitHub</a> page for usage and available options.</p>"),e.put("app/main/views/number/number.html",'<md-content class=layout-padding><p><b>ngTextRoll</b> can be embedded in a paragrah of text. Take the following example:</p><p>Lorem ipsum dolor sit amet, pellentesque sed libero, orci nec massa netus, dolor est augue nec odio sit, quo in enim arcu pede ultrices. Vitae cras inventore urna dapibus. Orci amet &nbsp;<ng-text-roll target=number.theValue></ng-text-roll>nullam vitae, urna curabitur lorem etiam tristique leo, ipsum dignissim magna. Sollicitudin mollis et dictum sed, quam at fusce dui sit sed et. Vitae integer nisl malesuada ullamcorper tincidunt, non aliquet bibendum. Metus netus, dignissim diam.</p><p>Now change the value: <button style=vertical-align:bottom md-ink-ripple=#3F51B5 class="md-button md-raised md-ink-ripple" type=button ng-click=number.changeValue()><span>Change Value</span></button> Really catches your eye, eh? :) You may notice sometimes there\'s a slight blurring effect when the text changes. This occurs when the over length of the string changes to compensate for propotional fonts.</p><p>Code:</p></md-content>')}]);
//# sourceMappingURL=../maps/scripts/app-e8a535363e.js.map
