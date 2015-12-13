'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */

angular
  .module('publicApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/room/:roomId', {
        templateUrl: 'views/room.html',
        controller: 'RoomCtrl'
      })
      .when('/myroute', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl',
        controllerAs: 'myroute'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl',
        controllerAs: 'work'
      })
      .when('/videochat', {
        templateUrl: 'views/vidiochat.html',
        controller: 'WorkCtrl',
        controllerAs: 'work'
      })
      .when('/call',{
        templateUrl: 'views/call.html',
        controller: 'CallCtrl',
        controllerAs: 'call'
      })
      .otherwise({
        redirectTo: '/myroute'
      });
  });

angular.module('publicApp')
  .constant('config', {
      SIGNALIG_SERVER_URL: undefined
  });

Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
  obj.__proto__ = proto;
  return obj;
};
