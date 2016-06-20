!function(){"use strict";angular.module("demoApp",["ngAnimate","ngAria","ui.router","ngMaterial","ui.ngTextRoll","hljs"])}(),function(){"use strict";function e(e){var t=this;t.theValue=e.getRandomDecimal(100,900),t.changeTheValue=function(){t.theValue=e.getRandomDecimal(100,900)},t.theOtherValue=12345.67,t.operations=[{label:"Add",op:"add"},{label:"Substract",op:"sub"},{label:"Multiply",op:"mul"}],t.changeValue=function(){switch(t.chosenOperation){case"add":t.theOtherValue=t.theOtherValue+t.delta;break;case"sub":t.theOtherValue=t.theOtherValue-t.delta;break;case"mul":t.theOtherValue=t.theOtherValue*t.delta}},t.rollConfig={rollBetween:!0}}e.$inject=["demoUtilSvc"],angular.module("demoApp").controller("NumberDemoController",e)}(),function(){"use strict";function e(e,t,n){var a=this;a.lower=1e7,a.upper=5e7,a.time=1e3,a.theValue=n.getRandomInt(a.lower,a.upper);var l,o=function(){a.theValue=n.getRandomInt(a.lower,a.upper),a.time=n.getRandomInt(2e3,3e3),l=t(o,a.time)};l=t(o,a.time),e.$on("$destroy",function(){l&&t.cancel(l)})}e.$inject=["$scope","$timeout","demoUtilSvc"],angular.module("demoApp").controller("IntroController",e)}(),function(){"use strict";angular.module("demoApp").factory("demoUtilSvc",function(){var e={};return e.getRandomInt=function(e,t){return parseInt(Math.random()*(t-e)+e)},e.getRandomDecimal=function(e,t){return parseFloat((Math.random()*(t-e)+e).toFixed(2))},e.getRandomDate=function(){var t=parseInt(e.getRandomDecimal(1,99)),n=new Date;return n.setDate(n.getDate()+t),n},e})}(),function(){"use strict";function e(e,t,n,a,l){var o=this;o.demoMenuItems=[{label:"Introduction",stateName:"main.intro"},{label:"Number",stateName:"main.number"}],o.demoMenuInx=0;var i=function(){angular.forEach(o.demoMenuItems,function(e,t){return e.stateName===l.current.name?(o.currentLabel=e.label,o.demoMenuInx=t,!0):void 0})};i(),o.openNav=function(){t(function(){e("left").open()})};var r=n.$on("$locationChangeSuccess",function(){i(),t(function(){e("left").close()})});a.$on("$destroy",function(){r&&r()})}e.$inject=["$mdSidenav","$timeout","$rootScope","$scope","$state"],angular.module("demoApp").controller("MainController",e)}(),function(){"use strict"}(),function(){"use strict";function e(e,t){t.otherwise("/intro"),e.state("main",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("main.intro",{url:"/intro",templateUrl:"app/main/views/intro/intro.html",controller:"IntroController",controllerAs:"intro"}).state("main.number",{url:"/number",templateUrl:"app/main/views/number/number.html",controller:"NumberDemoController",controllerAs:"number"})}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("demoApp").config(e)}(),function(){"use strict";angular.module("demoApp").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.theme("default").primaryPalette("blue").accentPalette("light-blue")}e.$inject=["$logProvider","$mdThemingProvider"],angular.module("demoApp").config(e)}(),angular.module("demoApp").run(["$templateCache",function(e){e.put("app/main/main.html",'<div id=ng-text-roll-docs layout=row><div id=left-extra-panel hide show-gt-md flex></div><section id=middle-panel flex-xs=100 flex-sm=100 flex-md=100 flex-gt-md=55 layout=row><!-- main left side bar --><md-sidenav class="main-site-nav md-sidenav-left" md-component-id=left md-is-locked-open="$mdMedia(\'gt-sm\')" md-disable-backdrop md-whiteframe=4><div class=main-logo><a href=https://daveteply.github.io/ng-text-roll/dist/ ><img src=assets/images/ngTextRoll.png alt="ngTextRoll Logo"><h1>ngTextRoll</h1></a></div><md-content flex role=navigation><md-list><md-subheader class=md-no-sticky>What is ngTextRoll?</md-subheader><md-list-item ui-sref={{main.demoMenuItems[0].stateName}} ng-click="main.demoMenuInx = 0" ng-class="{active: main.demoMenuInx === 0}"><span>{{main.demoMenuItems[0].label}}</span></md-list-item></md-list><md-divider></md-divider><md-list><md-subheader class=md-no-sticky>Demos</md-subheader><md-list-item ng-repeat="menuItem in main.demoMenuItems" ui-sref={{menuItem.stateName}} ng-click="main.demoMenuInx = $index" ng-if="$index > 0" ng-class="{active: main.demoMenuInx === $index}"><span>{{menuItem.label}}</span></md-list-item></md-list></md-content></md-sidenav><!-- end main left side bar --><div layout=column flex role=main><md-toolbar layout-padding md-whiteframe=6><div class=md-toolbar-tools flex><button class="md-icon-button md-button hide-gt-sm" ng-click=main.openNav()><i class=material-icons>menu</i></button><h2 class="md-toolbar-item md-breadcrumb md-headline">{{main.currentLabel}}</h2><span flex></span><div class="md-toolbar-item layout-row" layout=row><a class="md-icon-button md-button ng-scope md-ink-ripple" href=https://github.com/daveteply/ng-text-roll aria-label="View Source on Github" target=_blank><img src=assets/images/GitHub-Mark-32px.png alt=""><md-tooltip md-direction=left>View Source on Github</md-tooltip></a></div></div></md-toolbar><!-- main view content --><div layout=column flex><md-content flex layout-padding><div ui-view></div></md-content><!-- end main view content --><footer><div layout=row layout-align="center center"><span>Code licensed under the MIT License.</span></div></footer></div></div></section><div id=right-extra-panel hide show-gt-md flex></div></div>'),e.put("app/main/views/intro/intro.html","<h2>What is ngTextRoll?</h2><p>With today's very dynamic web experience, elements and text on a page can change frequently. ngTextRoll is an <a href=https://angularjs.org/ target=_blank>AngularJS</a> <a href=https://docs.angularjs.org/guide/component target=_blank>component</a> designed to help draw attention to these types of changes.</p><div class=\"layout-align-center layout-row\"><ng-text-roll class=intro-demo target=intro.theValue></ng-text-roll></div><h2>Installation</h2><p><ol><li>Install via <a href=http://bower.io/ target=_blank>Bower</a></li><div hljs hljs-no-escape>>$ bower install ng-text-roll</div><li>Add the ngTextRoll module</li><div hljs>angular.module('myApp', ['ui.ngTextRoll'])</div><li>Use the component</li><p>\r\n      Markup:\r\n      <div hljs hljs-language=\"HTML\">\r\n<ng-text-roll target=\"theValue\"></ng-text-roll></div>\r\n    </p> JS:\r\n    <div hljs hljs-language=\"JavaScript\">\r\nangular\r\n  .module('demoApp')\r\n  .controller('IntroController',\r\n    function($scope) {\r\n      $scope.theValue = 123;\r\n    });</ol></p><p>Check out the <a href=https://github.com/daveteply/ng-text-roll>GitHub</a> page for usage and available options.</p>"),e.put("app/main/views/number/number.html",'<section><p><b>ngTextRoll</b> can be embedded in a paragrah of text. Take the following example:</p><p>Lorem ipsum dolor sit amet, pellentesque sed libero, orci nec massa netus, dolor est augue nec odio sit, quo in enim arcu pede ultrices. Vitae cras inventore urna dapibus. Orci amet &nbsp;<ng-text-roll target=number.theValue></ng-text-roll>nullam vitae, urna curabitur lorem etiam tristique leo, ipsum dignissim magna. Sollicitudin mollis et dictum sed, quam at fusce dui sit sed et. Vitae integer nisl malesuada ullamcorper tincidunt, non aliquet bibendum. Metus netus, dignissim diam.</p><p>Now change the value: <button style=vertical-align:bottom md-ink-ripple=#3F51B5 class="md-button md-raised md-ink-ripple" type=button ng-click=number.changeTheValue()><span>Change Value</span></button> Really catches your eye, eh? :) You may notice sometimes there\'s a slight blurring effect when the text changes. This occurs when the over length of the string changes to compensate for propotional fonts.</p></section><md-divider></md-divider><section><p>Here\'s another example:<ng-text-roll class=md-display-1 target=number.theOtherValue config=number.rollConfig></ng-text-roll></p><div layout=row layout-xs=column><md-input-container><label>Select Operation</label><md-select ng-model=number.chosenOperation><md-option ng-repeat="op in number.operations" value={{op.op}}>{{op.label}}</md-option></md-select></md-input-container><md-input-container><label>Enter a value</label><input type=number ng-model=number.delta></md-input-container><div flex><md-button class="md-raised md-primary" ng-click=number.changeValue() ng-disabled="!number.chosenOperation || !number.delta">Change Value</md-button><md-button class="md-raised md-primary" ng-click="number.theOtherValue = 12345.67">Reset Value</md-button></div></div><div layout=row layout-wrap><md-input-container><md-switch ng-model=number.rollConfig.rollAll>Rolling {{number.rollConfig.rollAll ? "all" : "only changed"}} characters</md-switch></md-input-container><md-input-container><md-switch ng-model=number.rollConfig.rollBetween>Rolling {{number.rollConfig.rollBetween ? "all characters between changes" : "only character differences"}}</md-switch></md-input-container></div></section>')}]);
//# sourceMappingURL=../maps/scripts/app-700393c48b.js.map
