import Script from './../script.es6';

const PI2 = Math.PI * 2;

class Rotate extends Script {
    constructor(speed) {
        super();

        this.speed = speed || 1;
    }

    update(dT) {
        // console.log('Rotete.update', this.object.rotation, this.speed * dT);
        // debugger;
        this.object.rotation += this.speed * (dT * PI2);
    }
}

export default Rotate;
