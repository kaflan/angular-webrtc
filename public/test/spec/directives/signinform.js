'use strict';

describe('Directive: signInForm', function () {

  // load the directive's module
  beforeEach(module('publicApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sign-in-form></sign-in-form>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the signInForm directive');
  }));
});
