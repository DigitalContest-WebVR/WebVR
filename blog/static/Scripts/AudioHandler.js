AFRAME.registerComponent('audio-handler', {
  schema:{
    audioID: {type: 'string', default:""}
  },

  init:function() {
     var audio = document.querySelector(this.data.audioID);

     this.el.addEventListener('soundPlay', function()
     {
          audio.pause();
          audio.currentTime = 0;
          
          audio.play();
     });
  }
})
