import Engine, {GameObject, BASIC_SCRIPTS} from './../../../engine/engine.es6';

class SoundObject extends GameObject {
    constructor() {
        super();

        this.addComponent(new BASIC_SCRIPTS.LOOP_SOUND({
            name: 'test-sound',
            interval: 2000
        }));
    }
}

export default SoundObject;
