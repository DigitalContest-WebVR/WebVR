AFRAME.registerComponent('enter-vr-mode', {
    init: function () {
      var sceneEl = this.el;

      sceneEl.enterVR();
    }
  });