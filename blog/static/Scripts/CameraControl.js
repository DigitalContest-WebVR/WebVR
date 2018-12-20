AFRAME.registerComponent('automove', {
  schema:{
    step: {type: 'number', default: -0.05}
  },

  tick: function(){
    var player = this.el.parentNode;
    var camera = this.el;

    player.removeAttribute('dynamic-body');

    var direction = new THREE.Vector3().copy(camera.object3D.getWorldDirection());

    var step = direction.multiplyScalar(this.data.step * 4);

    var tmpPos = new THREE.Vector3().copy(player.object3D.position);

    tmpPos.add(camera.object3D.position);

    tmpPos.add(step);
    var distanceWithOrigin = tmpPos.distanceTo(new THREE.Vector3(0, 0, 0));

    if(distanceWithOrigin > 120)
    {
      player.setAttribute('position', {x : 0, y : 3, z : 0});

      player.emit('decreaseHp', {damage:20});
    }
    else
    {
      if(tmpPos.y < 1.5)
      {
        step.y = 0;
      }

      player.object3D.position.add(step);
    }

    player.setAttribute('mixin', 'player-body');
  }
});
