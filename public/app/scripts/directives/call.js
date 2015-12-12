'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:call
 * @description
 * # call
 */
angular.module('publicApp')
  .directive('callModal', function () {
    return {
      templateUrl: 'views/call.html',
      controller: 'RoomCtrl',
      restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      conole.log('link');
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
        scope.hideModal = function() {
        scope.show = false;
      };
    }
    };
  });
