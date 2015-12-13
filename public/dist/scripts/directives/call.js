'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:call
 * @description
 * # call
 */
angular.module('publicApp')
  .directive('call', function () {
    return {
      templateUrl: "views/call.html",
      controller: 'CallCtrl',
      restrict: 'E',
    };
  });
