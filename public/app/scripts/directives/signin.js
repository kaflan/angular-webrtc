'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:signIn
 * @description
 * # signIn
 */
angular.module('publicApp')
  .directive('signIn', function () {
    return {
    restrict: 'E',
    controller: 'MyrouteCtrl',
    scope: {
      show: '='
    },
    templateUrl: "views/siggnIn.html",
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle2 = {};
      if (attrs.width)
        scope.dialogStyle2.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle2.height = attrs.height;
      scope.hideModal2 = function() {
        scope.show = false;
      };
    }
  };
  });
