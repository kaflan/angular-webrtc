'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:modalRegistration
 * @description
 * # modalRegistration
 */
angular.module('publicApp')
  .directive('modalRegistration', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the modalRegistration directive');
      }
    };
  });
