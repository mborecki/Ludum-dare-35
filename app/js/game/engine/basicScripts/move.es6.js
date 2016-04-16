import Script from './../script.es6';

class Move extends Script {
    constructor(speed) {
        super();

        this.speed = speed || {
            x: 1,
            y: 0
        };
    }

    update(dT) {
        this.object.x += this.speed.x;
        this.object.y += this.speed.y;
    }
}

export default Move;
