'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:formRegistration
 * @description
 * # formRegistration
 */
angular.module('publicApp')
  .directive('formRegistration', function () {
    return {
      templateUrl: 'views/form.html',
      controller: 'MyrouteCtrl',
      restrict: 'E',
      scope: {
        show: '='
      },
      replace: true, // Replace with the template below
      transclude: true, // we want to insert custom content inside the directive
      link: function(scope, element, attrs) {
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
