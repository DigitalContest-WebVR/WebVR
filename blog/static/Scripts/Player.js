AFRAME.registerComponent('player', {
    schema:
    {
        hp:{type:'number', default: 10},
    },

    init: function()
    {
        var hp = this.data.hp;

        var crashAudio = document.querySelector('#crash-audio');
        var itemAudio = document.querySelector('#item-audio');

        this.el.addEventListener('decreaseHp', function(evt){
            console.log("Decrease Hp: " + evt.detail.damage);

            hp -= evt.detail.damage;

            if(hp <= 0)
            {
              hp = 0;

              var score = document.querySelector('#score').getAttribute('value').split(' ')[1];

              console.log(score);

              document.querySelector('#scene').emit('update', {score:score});

              window.location = '/result/?' + score;

              //document.querySelector('#toMain').emit('click');
            }

            crashAudio.emit('soundPlay');

            this.emit('setUI');
         });

         this.el.addEventListener('increaseHp', function(evt){
            hp += evt.detail.heal;

            if(hp > 100)
            {
              hp = 100;
            }

            itemAudio.emit('soundPlay');

            this.emit('setUI');
         });

         this.el.addEventListener('setUI', function(){
           var hpEl = document.querySelector('#hp');

           var string = "HP : " + hp;

           hpEl.setAttribute('value', string);
         });

         this.el.emit('setUI');
    },

    tick: function()
    {

    }
});
