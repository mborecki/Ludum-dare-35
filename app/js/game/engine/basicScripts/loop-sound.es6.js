import Script from './../script.es6';
import Sounds from './../sounds.es6';

class LoopSound extends Script {
    constructor(params) {
        super();
        this.params = params
    }

    start() {
        let sound = Sounds.getSound(this.params.name)
        if (sound) {
            setInterval(() => {
                sound.play();
            }, this.params.interval);
        }
    }
}

export default LoopSound;
