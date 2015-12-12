'use strict';

describe('Directive: call', function () {

  // load the directive's module
  beforeEach(module('publicApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<call></call>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the call directive');
  }));
});
