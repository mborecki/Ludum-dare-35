import PIXI from 'pixi.js';

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

    draw(onComplete) {
        console.warn('TODO: PIXIRenderer.draw');

        this.renderer.render(this.stage);

        if (typeof onComplete === 'function') {
            onComplete();
        }
    }
}

export default PIXIRenderer;
