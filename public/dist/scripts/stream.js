$(document).ready(function() {
  var webrtc = new SimpleWebRTC({
    // the id/element dom element that will hold "our" video
    localVideoEl: 'localVideo',
    // the id/element dom element that will hold remote videos
    remoteVideosEl: 'remoteVideos',
    // immediately ask for camera access
    autoRequestMedia: true
  });
  $('.call').click(function() {
    console.log('call');
    webrtc.joinRoom('your awesome room name');
  });
  $('.close').click(function() {
    console.log('close');

  });
});
