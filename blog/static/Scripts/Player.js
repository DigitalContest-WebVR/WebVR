AFRAME.registerComponent('player', {
    schema:
    {
        hp:{type:'number', default: 100},
    },

    init: function()
    {
        var hp = this.data.hp;

        this.el.addEventListener('decreaseHp', function(evt){
            console.log("Decrease Hp: " + evt.detail.damage);

            hp -= evt.detail.damage;

            if(hp <= 0)
            {
                window.location = "/";

                hp = 0;
                console.log(hp);
            }

            var hpEl = document.querySelector('#hp');

            var score = "HP : " + hp;

            hpEl.setAttribute('value', score);

            
            var audio = document.querySelector('#audio-handler');

            audio.emit('soundPlay');
         });
    },

    tick: function()
    {
    }
});
