var Lorem;
(function() {
    console.log("lorem script is running");

    //Create a class named Lorem and constructor
    Lorem = function() {
        //Default values.
        this.type = null;
        this.query = null;
        this.data = null;
    };
    //Static variables
    Lorem.IMAGE = 1;
    Lorem.TEXT = 2;
    Lorem.TYPE = {
        PARAGRAPH: 1,
        SENTENCE: 2,
        WORD: 3
    };
    //Words to create lorem ipsum text.
    Lorem.WORDS = [

            "Auschwitz, the meaning of pain. The way that I want you to die.",
"Slow death, immense decay, showers that cleanse you of your life.",
"Human mice, for the angel of death, monarch to the kingdom of the dead.",
"Sadistic, surgeon of demise, sadist of the noblest blood.",
"Surgery, with no anesthesia, feel the knife pierce you intensely.",
"An unforeseen future nestled somewhere in time. Unsuspecting victims no warnings, no signs.",
"Judgment day the second coming arrives. Before you see the light you must die.",


    ];
    //random integer method.
    Lorem.prototype.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    //text creator method with parameters: how many, what
    Lorem.prototype.createText = function(count, type) {
        switch (type) {
            //paragraphs are loads of sentences.
            case Lorem.TYPE.PARAGRAPH:
                var paragraphs = new Array;
                for (var i = 0; i < count; i++) {
                    var paragraphLength = this.randomInt(10, 20);
                    var paragraph = this.createText(paragraphLength, Lorem.TYPE.SENTENCE);
                    paragraphs.push('<p>'+paragraph+'</p>');
                }
                return paragraphs.join('\n');
            //sentences are loads of words.
            case Lorem.TYPE.SENTENCE:
                var sentences = new Array;
                for (var i = 0; i < count; i++) {
                    var sentenceLength = this.randomInt(2, 2);
                    var words = this.createText(sentenceLength, Lorem.TYPE.WORD).split(' ');
                    words[0] = words[0].substr(0, 1).toUpperCase() + words[0].substr(1);
                    var sentence = words.join(' ');

                    sentences.push(sentence);
                }
                return (sentences.join('. ') + '.');
            //words are words
            case Lorem.TYPE.WORD:
                var wordIndex = this.randomInt(0, Lorem.WORDS.length - count - 1);

                return Lorem.WORDS.slice(wordIndex, wordIndex + count).join(' ').replace(/[\.\,]/g,'');
        }
    };
    Lorem.prototype.createLorem = function(element) {

        var lorem = new Array;
        var count;

        if (/\d+-\d+[psw]/.test(this.query)){
            var range = this.query.substring(0,this.query.length-1).split("-");
            count = this.randomInt(parseInt(range[0]),parseInt(range[1]));
        }else{
            count = parseInt(this.query);
        }

        var typeInput = this.query[this.query.length-1];
        if (typeInput=='p') {
            var type = Lorem.TYPE.PARAGRAPH;
        }
        else if (typeInput=='s') {
            var type = Lorem.TYPE.SENTENCE;
        }
        else if (typeInput=='w') {
            var type = Lorem.TYPE.WORD;
        }

        lorem.push(this.createText(count, type));
        lorem = lorem.join(' ');

        if (element) {
            if (this.type == Lorem.TEXT)
                element.innerHTML += lorem;
            else if (this.type == Lorem.IMAGE) {
                //TODO: for now, using lorempixel.
                var path = '';
                var options = this.query.split(' ');
                if (options[0] == 'gray') {
                    path += '/g';
                    options.shift(); // Remove first element.
                }
                if (element.getAttribute('width'))
                    path += '/' + element.getAttribute('width');

                if (element.getAttribute('height'))
                    path += '/' + element.getAttribute('height');

                path += '/' + options.join(' ');
                element.src = 'http://lorempixel.com'+path;
            }
        }

        if (element == null) return lorem;
    };

    window.addEventListener('DOMContentLoaded',function(){
        var els = document.querySelectorAll('[data-lorem]');
        for(var i in els){
            if(els.hasOwnProperty(i)){
                var lorem = new Lorem;
                lorem.type = els[i].tagName=='IMG' ? Lorem.IMAGE : Lorem.TEXT;
                lorem.query = els[i].getAttribute('data-lorem');
                lorem.createLorem(els[i]);
            }
        }
    });

})();