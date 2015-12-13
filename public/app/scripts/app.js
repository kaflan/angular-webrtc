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
      .when('/myroute', {
        templateUrl: 'views/lending.html',
        controller: 'MyrouteCtrl',
        controllerAs: 'myroute'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
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
