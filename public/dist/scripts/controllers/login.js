'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('LoginCtrl', function ($scope) {
    $scope.enter = function(){
      window.location.href = "http://qui.shpp.me:1213";
      // if (user||user.mail||user.password) {
      //   send.query(user);
      // } else {
      //   alert('введите емайл и пороль');
      // }
    };
  });
