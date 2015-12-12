'use strict';

describe('Controller: CallCtrl', function () {

  // load the controller's module
  beforeEach(module('publicApp'));

  var CallCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CallCtrl = $controller('CallCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CallCtrl.awesomeThings.length).toBe(3);
  });
});
