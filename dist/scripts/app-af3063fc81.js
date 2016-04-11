!function(){"use strict";angular.module("devApp",["ngSanitize","ui.router","ui.ngTextRoll"])}(),function(){"use strict";function t(t,e){t.calc={operator:"add"},t.updateNumeric=function(){var e=t.numericValue;switch(t.calc.operator){case"add":e+=t.calc.amount;break;case"substract":e-=t.calc.amount;break;case"multiply":e*=t.calc.amount}t.numericValue=e},t.changeAmt=function(){t.calc.amount=e.getRandomInt(20,130)},t.numericValue=e.getRandomInt(1,400),t.calc.amount=e.getRandomInt(20,130)}t.$inject=["$scope","demoSvc"],angular.module("devApp").controller("numberCtrl",t)}(),function(){"use strict";angular.module("devApp").factory("demoSvc",function(){var t={};return t.getRandomInt=function(t,e){return parseInt(Math.random()*(e-t)+t)},t.getRandomDecimal=function(t,e){return parseFloat((Math.random()*(e-t)+t).toFixed(2))},t.getRandomDate=function(){var e=parseInt(t.getRandomDecimal(1,99)),a=new Date;return a.setDate(a.getDate()+e),a},t})}(),function(){"use strict";function t(t,e){t.calc={operator:"add"},t.rollConfig={filter:"date"},t.updateDate=function(){var e=new Date;switch(t.calc.operator){case"add":e.setDate(t.dateValue.getDate()+t.calc.amount);break;case"substract":e.setDate(t.dateValue.getDate()+t.calc.amount)}t.dateValue=e},t.changeAmt=function(){t.calc.amount=e.getRandomInt(1,16)},t.dateValue=e.getRandomDate(),t.calc.amount=e.getRandomInt(1,16)}t.$inject=["$scope","demoSvc"],angular.module("devApp").controller("dateCtrl",t)}(),function(){"use strict";function t(t,e){t.calc={operator:"add"},t.rollConfig={filter:"currency"},t.updateNumeric=function(){var e=t.numericValue;switch(t.calc.operator){case"add":e+=t.calc.amount;break;case"substract":e-=t.calc.amount;break;case"multiply":e*=t.calc.amount}t.numericValue=e},t.changeAmt=function(){t.calc.amount=e.getRandomDecimal(20.01,130.99)},t.numericValue=e.getRandomDecimal(.01,400.99),t.calc.amount=e.getRandomDecimal(20.01,130.99)}t.$inject=["$scope","demoSvc"],angular.module("devApp").controller("currencyCtrl",t)}(),function(){"use strict";function t(t){t.state("index",{url:"",views:{demoNumber:{templateUrl:"app/demos/number.html",controller:"numberCtrl"},demoCurrency:{templateUrl:"app/demos/currency.html",controller:"currencyCtrl"},demoDate:{templateUrl:"app/demos/date.html",controller:"dateCtrl"}}})}t.$inject=["$stateProvider"],angular.module("devApp").config(t)}(),angular.module("devApp").run(["$templateCache",function(t){t.put("app/demos/currency.html",'<h3>Currency Demo</h3><p>Here is a demo displaying rolling characters as a price changes. Feel free to use styles :) This demo is using:</p><p style="font-family:monospace;">color: green; font-family: \'Times New Roman\'; letter-spacing: 3px; font-style: italic;</p><p></p><span>The price is</span><ng-text-roll style="color: green; font-family: \'Times New Roman\'; letter-spacing: 3px; font-style: italic;" target="numericValue" height="25px" config="rollConfig"></ng-text-roll><span>for some items.</span><ul><li><input type="radio" ng-model="calc.operator" value="add"> Add</li><li><input type="radio" ng-model="calc.operator" value="substract"> Substract</li><li><input type="radio" ng-model="calc.operator" value="multiply"> Multiple</li></ul><button type="button" class="btn btn-primary" ng-click="updateNumeric()">Update [{{calc.amount}}]</button> <button type="button" class="btn btn-info" ng-click="changeAmt()">Get new Update value</button>'),t.put("app/demos/date.html",'<h3>Date Demo</h3><p>Date tumbling is new, will have updates to this soon!</p><p>The date<ng-text-roll target="dateValue" height="18px" config="rollConfig"></ng-text-roll>is a date!</p><ul><li><input type="radio" ng-model="calc.operator" value="add"> Add</li><li><input type="radio" ng-model="calc.operator" value="substract"> Substract</li></ul><button type="button" class="btn btn-primary" ng-click="updateDate()">Update [{{calc.amount}}]</button> <button type="button" class="btn btn-info" ng-click="changeAmt()">Get new Update value</button>'),t.put("app/demos/number.html",'<h3>Number Demo</h3><p>This demo shows how ngTextRoll can tumble characters as a number changes. A blur is added when the lenth of the string changes to prevent character stacking for proportional fonts.</p><p>There are<ng-text-roll target="numericValue" height="16px"></ng-text-roll>items.</p><ul><li><input type="radio" ng-model="calc.operator" value="add"> Add</li><li><input type="radio" ng-model="calc.operator" value="substract"> Substract</li><li><input type="radio" ng-model="calc.operator" value="multiply"> Multiple</li></ul><button type="button" class="btn btn-primary" ng-click="updateNumeric()">Update [{{calc.amount}}]</button> <button type="button" class="btn btn-info" ng-click="changeAmt()">Get new Update value</button>')}]);