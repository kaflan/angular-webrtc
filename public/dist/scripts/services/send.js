'use strict';

/**
 * @ngdoc service
 * @name publicApp.send
 * @description
 * # send
 * Service in the publicApp.
 */
angular.module('publicApp')
  .service('send', function ($http) {
    return {
      query: function(url, data){
        return $http.post(url, data);
      }
    };
  });
