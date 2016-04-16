import {ObjectFactory, Level, GameObject, BASIC_SCRIPTS} from './../engine/engine.es6';

import Tile from './../objects/tile.es6';
import TileMap from './../objects/tileMap.es6';

class tilesLevel extends Level {
    constructor () {
        super();

        ObjectFactory.register('tile', Tile, {itemsInPoll: 20});
        ObjectFactory.register('tile-map', TileMap, {itemsInPoll: 1});
    }

    start() {
        super.start();

        console.log('tilesLevel.start')

        ObjectFactory.spawn('tile', {
            x: 100,
            y: 100,
        });

        this.map = ObjectFactory.spawn('tile-map', {
            size: {
                x: 5,
                y: 5
            },
            position: {
                x: 100,
                y: 100
            }
        });


        // ObjectFactory.spawn('sound-test');
        // ObjectFactory.spawn('music-test');
    }
}

export default tilesLevel
