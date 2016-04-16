import Engine from './../../engine/engine.es6';

import TestObject from './objects/testObject.es6';

class testLevel extends Engine.Level {
    constructor () {
        super();

        Engine.ObjectFactory.register('test', TestObject);
    }
}

export default testLevel
