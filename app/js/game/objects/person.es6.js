import {GameObject, Images, BASIC_SCRIPTS} from './../engine/engine.es6';
import PersonImageFactory from './../helpers/personImageFactory.es6';

class Person extends GameObject {
    constructor() {
        super();

        let imageName = PersonImageFactory.createImage();

        this.addComponent(Engine.gameRenderer.createSprite(imageName));
        // this.addComponent(new BASIC_SCRIPTS.ROTATE())
    }
}

export default Person;
