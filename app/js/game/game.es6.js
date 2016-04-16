import Promise from 'promise';

import Engine from './engine/engine.es6';

import TestLevel from './levels/testLevel/test.es6';

class Game {
    constructor(data) {
        console.info('Game init');
        Engine.setConfig(data);
        Engine.initRenderer();
    }

    init() {

        this.registerImages().then(() => {
            console.info('Images Loaded');
            this.initKeyBindings();
            this.initLevels();

            Engine.start()
        }).catch((e) => {
            console.error(e);
        });
    }

    initKeyBindings() {
        //TODO
    }

    registerImages() {
        return Promise.all([
            Engine.Images.register('Smile', {
                origin: [0, 0],
                size: [224, 224],
                url: 'assets/images/smile.png'
            })
        ]);
    }

    initLevels() {
        Engine.addLevel('Test', new TestLevel());
        Engine.runLevel('Test');
    }
}

export default Game;
