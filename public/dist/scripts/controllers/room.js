'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:RoomCtrl
 * @description
 * # RoomCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('RoomCtrl', function($scope, $sce, send) {
    $scope.videostreams = {};

  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  var webrtc = new SimpleWebRTC({
    // the id/element dom element that will hold "our" video
    localVideoEl: 'localVideo',
    // the id/element dom element that will hold remote videos
    remoteVideosEl: '', //remotesVideos',
    // immediately ask for camera access
    autoRequestMedia: true
  });

  // we have to wait until it's ready
  webrtc.on('readyToCall', function () {
    webrtc.joinRoom('codepen');
  });


  console.log('webrtc.connection', webrtc.connection);

  webrtc.connection.on('message', function(message) {
    console.log('connection.message', message);
  });

  webrtc.on('message', function(message) {
    console.log('webrtc.message', message);
  });

  webrtc.on('videoAdded', function (video, peer) {
    console.log('video added', peer, video);

    $scope.videostreams[video.id] =  $sce.trustAsResourceUrl(video.getAttribute('src'));

    $scope.$apply();
  });

  webrtc.on('videoRemoved', function (video, peer) {
    console.log('video removed ', video);
    delete $scope.videostreams[video.id];
    $scope.$apply();
  });


  //
  // Chat features
  //

  $scope.userId = "User" + Math.round(Math.random() * 1000);
	$scope.messages = ['Welcome to ____'];

  // Create a publish() function in the scope
  $scope.publish = function() {
    console.log('publish');
    /*
    webrtc.connection.emit('message', {
      message: "[" + $scope.userId + "] " + $scope.newMessage,
      type: 'chat'
    });
    */
    webrtc.sendToAll('chat', {
      message: "[" + $scope.userId + "] " + $scope.newMessage
    });

    $scope.newMessage = '';
  };

  //webrtc.connection.on('message', function(message) {
  webrtc.connection.on('message', function(message) {
		if(message.type !== "chat") return;

    /*
    console.log('message.type', message.type, message);

    console.log('chat', message);
    message = message.message;
    $scope.$apply(function() {
      if ($scope.messages.indexOf(message) == -1) {
        $scope.messages.unshift(message);
      }
    });
    */
    message = message.payload.message;
    //message = JSON.stringify(message);
    $scope.$apply(function() {
      if ($scope.messages.indexOf(message) == -1) {
        $scope.messages.unshift(message);
      }
    });

  });

    $scope.close = function() {

    };
    $scope.call = function() {
      // webrtc.on('readyToCall', function() {
      // you can name it anything

      webrtc.joinRoom('your awesome room name');
      // });
    }
    $scope.getLocalVideo()
  });
