import Promise from 'promise';

import Engine from './engine/engine.es6';

import TestLevel from './levels/testLevel/test.es6';
import TilesLevel from './levels/tilesLevel.es6';

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
            }),

            Engine.Images.register('Head', {
                origin: [0, 0],
                size: [40, 40],
                url: 'assets/images/person/head.png'
            }),

            Engine.Images.register('Torso', {
                origin: [0, 0],
                size: [40, 60],
                url: 'assets/images/person/torso.png'
            }),

            Engine.Images.register('Legs', {
                origin: [0, 0],
                size: [40, 60],
                url: 'assets/images/person/legs.png'
            }),

            Engine.Images.register('Tile0', {
                origin: [0, 0],
                size: [30, 30],
                url: 'assets/images/tiles/bw.png'
            }),

            Engine.Images.register('Tile1', {
                origin: [30, 0],
                size: [30, 30],
                url: 'assets/images/tiles/bw.png'
            }),

            Engine.Images.register('Tile2', {
                origin: [0, 30],
                size: [30, 30],
                url: 'assets/images/tiles/bw.png'
            }),

            Engine.Images.register('Tile3', {
                origin: [30, 30],
                size: [30, 30],
                url: 'assets/images/tiles/bw.png'
            }),

            Engine.Images.register('Tile4', {
                origin: [0, 60],
                size: [30, 30],
                url: 'assets/images/tiles/bw.png'
            }),

            Engine.Images.register('Tile5', {
                origin: [30, 60],
                size: [30, 30],
                url: 'assets/images/tiles/bw.png'
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
        // Engine.addLevel('Test', new TestLevel());
        Engine.addLevel('TilesTest', new TilesLevel());
        Engine.runLevel('TilesTest');
    }
}

export default Game;
