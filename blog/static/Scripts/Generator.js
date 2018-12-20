AFRAME.registerComponent('generator', {
  schema:{
    spawnDelay: {type: 'number', default: 0},
    spawnDelayOrigin: {type: 'number', default: 300}
  },

  init: function()
  {
    this.el.addEventListener('generate', function()
    {
      var newObjectEl;

      var x = Math.random() - 0.5;
      var y = Math.random();
      var z = Math.random() - 0.5;

      var direction = new THREE.Vector3(x, y, z).normalize();

      var step = direction.clone().multiplyScalar(126);

      var type = Math.floor(Math.random() * 33);

      if (type == 1){
        newObjectEl = document.createElement('a-entity');
        newObjectEl.setAttribute('gltf-model', '#healpack');
        newObjectEl.setAttribute('scale', '0.04 0.04 0.04');
        newObjectEl.setAttribute('id', 'heal-item');
      }
      else if(type == 2){
        newObjectEl = document.createElement('a-entity');
        newObjectEl.setAttribute('gltf-model', '#scorepack');
        newObjectEl.setAttribute('scale', '0.04 0.04 0.04');
        newObjectEl.setAttribute('id', 'score-item');
      }
      else {
        newObjectEl = document.createElement('a-entity');
        newObjectEl.setAttribute('gltf-model', '#obstacle');
        newObjectEl.setAttribute('scale', '0.08 0.08 0.08');
        newObjectEl.setAttribute('id', 'obstacle');
      }

      newObjectEl.setAttribute('position', {x: step.x, y: step.y, z: step.z});
      newObjectEl.setAttribute('mixin', 'object');

      document.querySelector('a-scene').appendChild(newObjectEl);
    });

    this.el.emit('generate');
  },

  tick: function(time, timeDelta)
  {
    var data = this.data;

    data.spawnDelay += timeDelta;

    if(data.spawnDelay > data.spawnDelayOrigin)
    {
      data.spawnDelay = 0;
      if(data.spawnDelayOrigin > 100)
      {
        data.spawnDelay -= 1;
      }

      this.el.emit('generate');
    }
  }
});
