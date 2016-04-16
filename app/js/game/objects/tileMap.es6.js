import {GameObject, ObjectFactory} from './../engine/engine.es6';

const TILE_WIDTH = 30;
const TILE_HEIGHT = 30;

class TileMap extends GameObject {
    constructor() {
        super();

        this.size = {
            x: 0,
            y: 0
        }

        this.position = {
            x: 0,
            y: 0
        }

        this.tiles = [];
    }

    updateParams(params) {
        super.updateParams(params);

        if (params.size) {
            if (typeof params.size.x === 'number') this.size.x = params.size.x;
            if (typeof params.size.y === 'number') this.size.y = params.size.y;
        }

        if (params.position) {
            if (typeof params.position.x === 'number') this.position.x = params.position.x;
            if (typeof params.position.y === 'number') this.position.y = params.position.y;
        }

        this.updateTiles();

        return this;
    }

    updateTiles() {
        if (!this.size) return;
        let count = this.size.x * this.size.y;

        if (this.tiles.length < count) {
            let dC = count - this.tiles.length;
            for (let i = 0; i < dC; i++) {
                this.tiles.push(ObjectFactory.spawn('tile'));
            }
        }

        for (let i = 0; i < this.tiles.length; i++) {
            let x = i % this.size.x;
            let y = Math.floor(i / this.size.y);

            console.log(x, y)

            if (i < count) {
                let tile = this.tiles[i];
                tile.x = (x * TILE_WIDTH) + this.position.x;
                tile.y = (y * TILE_HEIGHT) + this.position.y;
            } else {
                tile.destroy();
            }
        }

        this.tiles.splice(0, count);
    }

    create() {
        super.create();
        return this;
    }

}

export default TileMap;
