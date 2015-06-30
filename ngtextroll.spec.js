'use strict';

describe('Directive: ngTextRoll', function () {

  // load the directive's module
  beforeEach(module('ui.ng-text-roll'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should display text', inject(function ($compile) {
    var testValue = "test";
    var markUp = '<ng-text-roll display-value="testValue"></ng-text-roll>';
    element = angular.element(markUp);
    element = $compile(element)(scope);
    expect(element.text()).toBe(testValue);
  }));

};
