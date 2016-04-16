import {ObjectFactory, Level} from './../../engine/engine.es6';

import TestObject from './objects/testObject.es6';

class testLevel extends Level {
    constructor () {
        super();

        ObjectFactory.register('test', TestObject);
    }

    start() {
        super.start();

        let test = ObjectFactory.spawn('test', {
            x: 200,
            y: 200
        })
    }
}

export default testLevel
