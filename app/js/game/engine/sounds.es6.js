import Buzz from 'node-buzz';

class Sounds {
    constructor() {
        this.sounds = {};
    }

    register (name, params) {
        if (typeof this.sounds[name] !== "undefined") console.warn(`Repeat sound name: ${name}`);

        let sound = new Buzz.sound(params.url);

        this.sounds[name] = sound;
    }

    getSound(name) {
        return this.sounds[name];
    }
}

export default new Sounds();
