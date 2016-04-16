import Script from './../script.es6';
import Sounds from './../sounds.es6';

class LoopSound extends Script {
    constructor(params) {
        super();
        console.log('LoopSound.constructor')
        this.params = params
    }

    start() {
        console.log('LoopSound.start', this.params);
        let sound = Sounds.getSound(this.params.name)
        if (sound) {
            setInterval(() => {
                console.log('PLAY!')
                sound.play();
            }, this.params.interval);
        }
    }
}

export default LoopSound;
