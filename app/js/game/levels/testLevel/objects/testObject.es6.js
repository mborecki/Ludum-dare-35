import Engine, {GameObject} from './../../../engine/engine.es6';

class TestObject extends GameObject {
    constructor() {
        super();

        this.addComponent(Engine.gameRenderer.createSprite('Smile'));
    }
}

export default TestObject;
