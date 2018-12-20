AFRAME.registerComponent('score', {
    schema:
    {
        scoreCount:{type: 'number', default: 0},
    },

    init: function()
    {
        var itemAudio = document.querySelector('#item-audio');

        var scoreCount = this.data.scoreCount;
        var el = this.el;

        this.el.addEventListener('addScore', function(evt){

            scoreCount += evt.detail.score;

            el.setAttribute('value', "Score: " + Math.floor(scoreCount));
         });
    },

    tick: function(time, timeDelta)
    {
        this.el.emit('addScore', {score: timeDelta * 0.025});
    },
});
