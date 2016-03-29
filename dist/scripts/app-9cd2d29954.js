!function(){"use strict";angular.module("devApp",["ngSanitize","ngRoute","ui.ngTextRoll"])}(),function(){"use strict";function l(l){l.calc={operator:"add"},l.getRandomDecimal=function(l,a){return parseFloat((Math.random()*(a-l)+l).toFixed(2))},l.getRandomDate=function(){var a=parseInt(l.getRandomDecimal(1,99)),e=new Date;return e.setDate(e.getDate()+a),e},l.updateNumeric=function(){var a=l.numericValue||1,e=l.calc.amount||0;switch(l.calc.operator){case"add":a+=e;break;case"substract":a-=e;break;case"multiply":a*=e}a=parseFloat(a.toFixed(2)),l.numericValue=a},l.numericValue=l.getRandomDecimal(.01,10.99),l.calc.amount=l.getRandomDecimal(.01,3.99),l.dateValue=l.getRandomDate()}l.$inject=["$scope"],angular.module("devApp").controller("MainController",l)}(),function(){"use strict";function l(l){l.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"})}l.$inject=["$routeProvider"],angular.module("devApp").config(l)}(),angular.module("devApp").run(["$templateCache",function(l){l.put("app/main/main.html",'<div class="container"><h1>ngTextRoll <small>Demo Page</small></h1><div class="row"><div class="col-sm-6"><div class="panel panel-default"><div class="panel-heading">Numberic Value</div><div class="panel-body"><form name="numericValueForm"><div class="form-group"><label for="numericValueLabel" class="col-sm-2 control-label">Result</label><div class="col-sm-10"><span id="numericValueLabel" ng-style="numericStyle"><div class="row">Plain Text: <span ng-bind="numericValue"></span></div><div class="row">Currency Filter: <span ng-bind="numericValue | currency"></span></div><div class="row">ng-text-roll:<ng-text-roll value="numericValue" display-value="numericValue | currency"></ng-text-roll></div></span></div><div class="form-group"><label for="inputNumbericValue" class="col-sm-2 control-label">Amount</label><div class="col-sm-10"><input type="number" class="form-control" id="inputNumbericValue" ng-model="calc.amount"></div></div><div class="form-group"><label class="col-sm-2 control-label">Operation</label><div class="col-sm-10"><label class="radio-inline"><input type="radio" ng-model="calc.operator" value="add"> Add</label> <label class="radio-inline"><input type="radio" ng-model="calc.operator" value="substract"> Substract</label> <label class="radio-inline"><input type="radio" ng-model="calc.operator" value="multiply"> Multiply</label></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button type="button" ng-disabled="!calc.amount || numericValueForm.$invalid" class="btn btn-default" ng-click="updateNumeric()">Update Value</button></div></div></div></form></div></div></div></div><div class="col-sm-6"><div class="panel panel-default"><div class="panel-heading">Date Value</div><div class="panel-body"><form name="dateValueForm"><div class="form-group"><label for="numericValueLabel" class="col-sm-2 control-label">Result</label><div class="col-sm-10"><span id="numericValueLabel"><div style="row">Date Filter: <span ng-bind="dateValue | date"></span></div><div class="row">ng-text-roll:<ng-text-roll value="dateValue" display-value="dateValue | date"></ng-text-roll></div><div style="row">Date Input: <input type="date" ng-model="dateValue"></div></span></div></div></form></div></div></div><div></div></div>')}]);