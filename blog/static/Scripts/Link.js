AFRAME.registerComponent('my-link', {
    
    init: function()
    {
        this.el.addEventListener('click', function(evt)
        {
            console.log("scene-change");
        });
    }
  });
  