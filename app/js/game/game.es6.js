import Engine from './engine/engine.es6';

import TestLevel from './levels/testLevel/test.es6';

class Game {
    constructor(data) {
        console.info('Game init');
        Engine.setConfig(data);
    }

    init() {

        this.initKeyBindings();
        this.initImages();
        this.initLevels();

        Engine.start()
    }

    initKeyBindings() {
        //TODO
    }

    initImages() {
        Engine.Images.register('Smile', {
            origin: [0, 0],
            size: [],
            url: 'assets/images/smile.png'
        })
    }

    initLevels() {
        Engine.addLevel('Test', new TestLevel());
        Engine.runLevel('Test');
    }
}

export default Game;
