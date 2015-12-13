'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MyrouteCtrl
 * @description
 * # MyrouteCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('MyrouteCtrl', function($scope, send) {
    $scope.modalShown = false;
    $scope.toggleModal = function() {
      $scope.modalShown = !$scope.modalShown;
    };
    $scope.send = function() {
      window.location.href = "http://qui.shpp.me:1213";
      // if (user) {
      //   send.query(user);
      // } else {
      //   alert('введите емайл и пороль');
      // }
    };
  });
