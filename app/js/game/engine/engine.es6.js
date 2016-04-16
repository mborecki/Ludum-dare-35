import _geMath from "./utils/math/math.es6";
import PIXI from "pixi.js"

/**
 * @description  Main engine object. Exported as library default.
 *
 * @default
 * @namespace Engine
 */
class Engine {
    constructor() {
        this.ver = 0;
    }

    get geMath() {
        return _geMath
    }

    /**
     * Start
     */
    start() {
        console.info('Engine.start');
    }
}

export default new Engine();

export const PIXI = PIXI;
export const geMath = _geMath;

