import Engine, {GameObject, BASIC_SCRIPTS} from './../../../engine/engine.es6';

class SoundObject extends GameObject {
    constructor() {
        super();

        this.addComponent(new BASIC_SCRIPTS.LOOP_MUSIC('test-music'));
    }
}

export default SoundObject;
