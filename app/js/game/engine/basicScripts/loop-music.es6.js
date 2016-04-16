import Script from './../script.es6';
import Sounds from './../sounds.es6';

class LoopSound extends Script {
    constructor(name) {
        super();
        this.name = name
    }

    start() {
        let sound = Sounds.getSound(this.name)
        if (sound) {
            sound.play().loop();
        }
    }
}

export default LoopSound;
