AFRAME.registerComponent('audio-handler', {

  init:function() {
     var audio = document.querySelector("#crash");

     this.el.addEventListener('soundPlay', function()
     {
          audio.pause();
          audio.currentTime = 0;
          
          audio.play();
     });
  }
})
