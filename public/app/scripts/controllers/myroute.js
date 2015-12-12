'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MyrouteCtrl
 * @description
 * # MyrouteCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('MyrouteCtrl', function($scope) {
    $scope.modalShown = false;
    $scope.toggleModal = function() {
      $scope.modalShown = !$scope.modalShown;
    };
  });
