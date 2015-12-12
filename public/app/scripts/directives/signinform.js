'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:signInForm
 * @description
 * # signInForm
 */
angular.module('publicApp')
  .directive('signInForm', function () {
    return {
      templateUrl: 'views/signInForm.html',
      restrict: 'E',
      controller: 'LoginCtrl'
    };
  });
