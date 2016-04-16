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
            this.registerSounds();
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

    registerSounds() {
        Engine.Sounds.register('test-sound', {
            url: 'assets/sounds/test-sound.wav'
        })
        Engine.Sounds.register('test-music', {
            url: 'assets/music/150413_Piano_Sway---free_download.mp3'
        })
    }

    initLevels() {
        Engine.addLevel('Test', new TestLevel());
        Engine.runLevel('Test');
    }
}

export default Game;
