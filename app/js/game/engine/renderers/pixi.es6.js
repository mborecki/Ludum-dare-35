import PIXI from 'pixi.js';
import PIXISprite from './pixi.sprite.es6';

class PIXIRenderer {
    constructor(data) {
        console.warn('PIXIRenderer.constructor')
        data.container.appendChild(this.renderer.view);
    }

    get stage() {
        if (!this._stage) this._stage = new PIXI.Container();
        return this._stage;
    }

    get renderer() {
        if (!this._renderer) this._renderer = new PIXI.autoDetectRenderer(800, 600);
        return this._renderer;
    }

    add(gameObject) {
        for (let i = 0; i < gameObject.sprites.length; i++) {
            this.stage.addChild(gameObject.sprites[i].sprite);
        }
    }

    draw(onComplete) {
        this.renderer.render(this.stage);

        if (typeof onComplete === 'function') {
            onComplete();
        }
    }

    createSprite(imageName) {
        return new PIXISprite(imageName)
    }
}

export default PIXIRenderer;
