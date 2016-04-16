import Engine, {GameObject, BASIC_SCRIPTS} from './../../../engine/engine.es6';

class TestObject extends GameObject {
    constructor() {
        super();

        this.addComponent(Engine.gameRenderer.createSprite('Smile'));
        this.addComponent(new BASIC_SCRIPTS.ROTATE())
    }
}

export default TestObject;
