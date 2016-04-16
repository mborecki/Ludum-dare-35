import {ObjectFactory, Level, GameObject, BASIC_SCRIPTS} from './../../engine/engine.es6';

import TestObject from './objects/testObject.es6';
import SoundObject from './objects/soundObject.es6';
import MusicObject from './objects/musicObject.es6';
import Person from './../../objects/person.es6';

class testLevel extends Level {
    constructor () {
        super();

        ObjectFactory.register('test', TestObject, {createPool: false});
        ObjectFactory.register('sound-test', SoundObject, {createPool: false});
        ObjectFactory.register('music-test', MusicObject, {createPool: false});
        ObjectFactory.register('person', Person)
    }

    start() {
        super.start();

        ObjectFactory.spawn('test', {
            x: 200,
            y: 200
        })

        ObjectFactory.spawn('person', {
            x: 600,
            y: 200
        })



        // ObjectFactory.spawn('sound-test');
        // ObjectFactory.spawn('music-test');
    }
}

export default testLevel
