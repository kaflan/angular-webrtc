'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:CallCtrl
 * @description
 * # CallCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('CallCtrl', function ($scope) {
    $scope.redirect = function(){
      window.location.href = "http://qui.shpp.me:1213";
    }
  });
