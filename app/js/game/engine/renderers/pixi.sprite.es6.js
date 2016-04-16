import PIXI from 'pixi.js';

import Engine from './../engine.es6';
import Component from './../component.es6';
import Images from './../images.es6';

export const TYPE = 'PIXI_SPRITE';

class PIXISprite extends Component {
    constructor (imageName) {
        super();

        this.type = TYPE;

        this.loadImage(imageName)


    }

    loadImage(imageName) {
        let canvas = Images.getImage(imageName);

        this.sprite = new PIXI.Sprite(PIXI.Texture.fromCanvas(canvas));
        this.sprite.anchor.x = 0.5;
        this.sprite.anchor.y = 0.5;
    }

    update(object) {
        this.sprite.position.x = object.x;
        this.sprite.position.y = object.y;
        this.sprite.rotation = object.rotation;
    }

    destroy() {
        Engine.gameRenderer.stage.removeChild(this.sprite);
    }
}

export default PIXISprite;
