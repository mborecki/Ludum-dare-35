import {ObjectFactory, Level, GameObject, BASIC_SCRIPTS} from './../../engine/engine.es6';

import TestObject from './objects/testObject.es6';
import SoundObject from './objects/soundObject.es6';

class testLevel extends Level {
    constructor () {
        super();

        ObjectFactory.register('test', TestObject);
        ObjectFactory.register('sound-test', SoundObject);
    }

    start() {
        super.start();

        let test = ObjectFactory.spawn('test', {
            x: 200,
            y: 200
        })

        ObjectFactory.spawn('sound-test');
    }
}

export default testLevel
