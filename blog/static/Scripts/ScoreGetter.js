AFRAME.registerComponent('score-getter', {
    init: function()
    {
        temp = location.href.split("?");
        score = temp[1];
        this.el.setAttribute('value', "Score : " + score);
    }
  });
