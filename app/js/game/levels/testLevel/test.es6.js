import {ObjectFactory, Level, GameObject, BASIC_SCRIPTS} from './../../engine/engine.es6';

import TestObject from './objects/testObject.es6';
import SoundObject from './objects/soundObject.es6';
import MusicObject from './objects/musicObject.es6';

class testLevel extends Level {
    constructor () {
        super();

        ObjectFactory.register('test', TestObject);
        ObjectFactory.register('sound-test', SoundObject);
        ObjectFactory.register('music-test', MusicObject);
    }

    start() {
        super.start();

        let test = ObjectFactory.spawn('test', {
            x: 200,
            y: 200
        })

        // ObjectFactory.spawn('sound-test');
        ObjectFactory.spawn('music-test');
    }
}

export default testLevel
