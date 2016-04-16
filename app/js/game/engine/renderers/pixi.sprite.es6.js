import PIXI from 'pixi.js';

import Engine from './../engine.es6';
import Component from './../component.es6';
import Images from './../images.es6';

export const TYPE = 'PIXI_SPRITE';

class PIXISprite extends Component {
    constructor (imageName) {
        super();

        this.type = TYPE;

        this.sprite = new PIXI.Sprite(PIXI.Texture.fromCanvas(Images.getImage(imageName)));

        // debugger;

        /* DEV */
        this.sprite.position.x = 200;
        this.sprite.position.y = 200;

    }

    update(object) {
        console.warn('TODO: PIXISprite.update');
    }

    destroy() {
        Engine.gameRenderer.stage.removeChild(this.sprite);
    }
}

export default PIXISprite;
