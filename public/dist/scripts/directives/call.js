'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:call
 * @description
 * # call
 */
angular.module('publicApp')
  .directive('call', function () {
    return {
      template:"<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>",
      controller: 'CallCtrl',
      restrict: 'E',
    scope: {
      show: '='
    },
    controller: '',
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
