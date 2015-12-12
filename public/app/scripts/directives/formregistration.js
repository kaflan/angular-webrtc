'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:formRegistration
 * @description
 * # formRegistration
 */
angular.module('publicApp')
  .directive('formRegistration', function () {
    return {
      templateUrl: 'views/form.html',
      controller: 'MyrouteCtrl',
      restrict: 'E'
    };
  });
