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

                "Slow death, immense decay.",
                "Human mice, for the angel of death.",
                "Sadistic, surgeon of demise, sadist of the noblest blood.",
                "Surgery, with no anesthesia.",
                "An unforeseen future nestled somewhere in time.",
                "Judgment day the second coming arrives.",
                "Trapped in purgatory, a lifeless object, alive.",
                "The way that I want you to die.",
                "Showers that cleanse you of your life.",
                "Monarch to the kingdom of the dead.",
                "Before you see the light you must die.",
                "Feel the knife pierce you intensely.",
                "Unsuspecting victims no warnings, no signs.",
                "Trapped in purgatory.",
                "A lifeless object, alive.",
                "Awaiting reprisal.",
                "Awaiting reprisal Death will be their acquittence.",
                "The sky is turning red.",
                "Return to power draws near.",
                "Fall into me, the sky's crimson tears.",
                "Abolish the rules made of stone.",
                "Pierced from below, souls of my treacherous past.",
                "Awaiting the hour of reprisal.",
                "From a lacerated sky Bleeding its horror Creating my structure.",
                "Now I shall reign in blood.",
                "Betrayed by many, now ornaments dripping above.",
                "Drones since the dawn of time.",
                "Compelled to live your sheltered lives.",
                "Not once has anyone ever seen Such a rise of pure hypocrisy.",
                "I'll instigate I'll free your mind I'll show you what I've known all this time.",
                "Pessimist, terrorist targeting the next mark global chaos feeding on hysteria.",
                "Sounds a lot like hell is spreading all the time.",
                "I'm waiting for the day the whole world fucking dies.",
                "Cut throat, slit your wrist, shoot you in the back fair game.",
                "Drug abuse, self abuse searching for the next high.",
                "I never said I wanted to be God's disciple.",
                "I'll never be the one to blindly follow.",
                "Man made virus infecting the world Self-destruct human time bomb.",
                "What if there is no God would you think the fuckin' same Wasting your life in a leap of blind faith.",
                "Wake the fuck up can't ignore what I say.",
                "I got my own philosophy.",
                "Propaganda death ensemble, burial to be.",
                "Corpses rotting through the night, in blood laced misery.",
                "Scorched earth the policy, the reason for the siege.",
                "The pendulum it shaves the blade, the strafing air blood raid.",
                "Infiltration push reserves, encircle the front lines.",
                "Supreme art of strategy, playing on the minds.",
                "Bombard till submission, take all to their graves.",
                "Indication of triumph: the numbers that are dead.",
                "The sport is war, total war.",
                "When victory's really massacre.",
                "The final swing is not a drill.",
                "It's how many people I can kill.",
                "Propaganda war ensemble, burial to be.",
                "Bones shining by the night, in blood laced misery.",
                "Campaign of elimination, twisted psychology.",
                "When victory is to survive, and death is defeat.",
                "Lying, dying, screaming in pain.",
                "Begging, pleading, bullets drop like rain.",
                "Mines explode, pain sheers through your brain.",
                "Radical amputation, this is insane.",
                "Fly swatter stakes drive through your chest.",
                "Spikes impale you as you're forced off the crest.",
                "Soldier of misfortune.",
                "Hunting with bated breath.",
                "A vile smell, like tasting death.",
                "Dead bodies, dying and wounded.",
                "Litter the city streets.",
                "Shattered glass, bits of clothing and human deceit.",
                "Blood's cheap, it's everywhere.",
                "Mandatory suicide, massacre on the front line.",
                "Holy man open up your eyes To the ways of the world you've been so blind.",
                "As the walls of religion come crashing down.",
                "How's the ignorance taste the second time around.",
                "Tell me how it feels knowing chaos will never end.",
                "Tell me what it's like when the celebration begins.",
                "Welcome to the horror of the revelation.",
                "Tell me what you think of your savior now.",
                "I reject all the biblical views of the truth.",
                "Dismiss it as the folklore of the times.",
                "I won't be force fed prophecies From a book of untruths for the weakest mind.",
                "Join the new faith for the celebration.",
                "Cult of new faith fuels the devastation.",
                "Holy man come and worship me I am all that you ever wanted to be.",
                "The epitome of evil shining through.",


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
                    var paragraphLength = this.randomInt(14, 14);
                    var paragraph = this.createText(paragraphLength, Lorem.TYPE.SENTENCE);
                    paragraphs.push('<p>'+paragraph+'</p>');
                }
                return paragraphs.join('\n');
            //sentences are loads of words.
            case Lorem.TYPE.SENTENCE:
                var sentences = new Array;
                for (var i = 0; i < count; i++) {
                    var sentenceLength = this.randomInt(1, 1);
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