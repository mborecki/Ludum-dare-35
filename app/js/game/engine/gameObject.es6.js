import Engine from './engine.es6';
const PI2 = Math.PI * 2;

class GameObject {

    get x () {
        return this._.x;
    }

    set x (x) {
        this._.x = x
    }

    get y () {
        return this._.y;
    }

    set y (y) {
        this._.y = y;
    }

    get rotation() {
        return this._.rotation || 0;
    }

    set rotation(r) {
        this._.rotation = r - (((r/PI2)|0) * PI2);
    }

    get isDrawable() {
        return !this.destroyed && !!this.sprites.length;
    }

    get isUpdateable() {
        return this._.needUpdate || false;
    }

    get location() {
        return [this.x, this.y];
    }

    constructor (params = {}) {
        this._ = {};
        this._.needUpdate = false;

        this.scripts = [];
        this.updateScripts = [];
        this.startScripts = [];
        this.sprites = [];

        this.reset();
        this.updateParams(params)
    }

    reset () {
        this.x = 0;
        this.y = 0;
    }

    destroy () {
        this.destroyed = true;

        let c = this.sprites.length;
        for (let i = 0; i < c; i++) {
            this.sprites[i].destroy();
        }
    }

    create (dontAddToEngine) {
        this.destroyed = false;
        if (!dontAddToEngine) Engine.addObject(this);

        return this;
    }

    start() {
        for (let i = 0; i < this.startScripts.length; i++) {
            this.startScripts[i].start();
        }

        let c2 = this.sprites.length;
        for (let j = 0; j < c2; j++) {
            this.sprites[j].start(this);
        }
    }

    update (dT) {
        let c = this.updateScripts.length;
        for (let i = 0; i < c; i++) {
            this.updateScripts[i].update(dT);
        }

        let c2 = this.sprites.length;
        for (let j = 0; j < c2; j++) {
            this.sprites[j].update(this);
        }
    }

    updateParams (params = {}) {
        this.x = (params.x ? params.x : this.x) || 0;
        this.y = (params.y ? params.y : this.y) || 0;

        return this;
    }

    addComponent (component) {
        switch (component.type) {
            case Engine.Script.TYPE:
                this.addScript(component);
                break;

            case 'PIXI_SPRITE':
                this.addSprite(component);
                break;

            default:
                console.warn(`Unknow component type: ${component.type}`);
        }

        component.object = this;

        return component;
    }

    addScript (script) {
        this.scripts.push(script);

        if (typeof script.update === 'function') {
            this.updateScripts.push(script);
            this._.needUpdate = true;
        }

        if (typeof script.start === 'function') {
            this.startScripts.push(script);
        }
    }

    addSprite (sprite) {
        this.sprites.push(sprite);
    }
}

export default GameObject;
