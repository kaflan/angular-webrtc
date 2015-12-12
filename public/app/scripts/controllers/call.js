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
    $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
  });
