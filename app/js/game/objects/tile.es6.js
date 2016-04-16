import {GameObject} from './../engine/engine.es6.js';

class Tile extends GameObject {
    constructor() {
        super();

        console.log('Tile.constructor')


        this.sprite = this.addComponent(Engine.gameRenderer.createSprite());

        this.value = 0;
    }

    get value() {
        return this._v || 0;
    }

    set value(v) {
        this._v = v % 6;
        this.updateSprite();
    }

    create(dontAddToEngine) {
        super.create(dontAddToEngine);
        this.value = 2;

        return this;
    }

    updateParams(params) {
        super.updateParams(params);

        if (typeof params.value !== 'undefined') {
            this.value = params.value;
        }

        return this;
    }

    updateSprite() {
        console.log('Tile.updateSprite')
        this.sprite.loadImage(`Tile${this.value}`);

        this._.needUpdate = true;
    }
}

export default Tile;
