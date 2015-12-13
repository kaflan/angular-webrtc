'use strict';

/**
 * @ngdoc service
 * @name publicApp.send
 * @description
 * # send
 * Service in the publicApp.
 */
angular.module('publicApp')
  .service('send', function($q) {
    navigator.getUserMedia = navigator.getUserMedia ||
      navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    var constraints = {
      audio: false,
      video: true
    };

    var deferred = $q.defer();

    var get = function() {
      navigator.getUserMedia(
        constraints,
        function(stream) {
          deferred.resolve(stream);
        },
        function errorCallback(error) {
          console.log('navigator.getUserMedia error: ', error);
          deferred.reject(error);
        }
      );

      return deferred.promise;
    }

    return {
      get: get
    }

  });
