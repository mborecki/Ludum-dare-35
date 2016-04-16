import {Images} from './../engine/engine.es6';

class personImageFactory {
    constructor() {

    }

    createImage(seed = 0) {
        let name = 'person_' + seed;

        if (!Images.getImage(name)) {

            let head = this.getHead(0);
            let torso = this.getTorso(0);
            let legs = this.getLegs(0);

            let canvas = document.createElement('canvas');
            canvas.width = 40;
            canvas.height = 160;

            canvas.getContext("2d").drawImage(head, 0, 0);
            canvas.getContext("2d").drawImage(torso, 0, 40);
            canvas.getContext("2d").drawImage(legs, 0, 100);

            Images.addImage(name, canvas);

        }

        return name
    }

    getHead(id) {
        return Images.getImage('Head');
    }

    getTorso(id) {
        return Images.getImage('Torso');
    }

    getLegs(id) {
        return Images.getImage('Legs');
    }
}

export default new personImageFactory();
