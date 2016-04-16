
/**
 * @class
 * @memberOf  Engine.geMath
 */
class Vector2d {
    constructor (sizes) {
        this._d = {};
        this.x = sizes[0];
        this.y = sizes[1];
    }

    /**
     * X value
     *
     * @type {number}
     */
    get x() {
        return this._d.x;
    }

    set x(x) {
        this._d.x = x;
        this[0] = x;
    }

    /**
     * Y value
     *
     * @type {number}
     */
    get y() {
        return this._d.y;
    }

    set y(y) {
        this._d.y = y;
        this[1] = y;
    }

    /**
     * Vector length
     *
     * @readonly
     * @type {number}
     */
    get length() {
        debugger;
        return Vector2d.getLength(this);
    }

    /**
     * Add vectors to `this`.
     * @param {...number[]} v
     */
    add(...v) {
        let _v = Vector2d.add([this, ...v]);
        this.x = _v.x;
        this.y = _v.y;
    }

    /**
     * Get vector length
     *
     * @static
     * @param  {number[]} v
     * @return {number[]}
     */
    static getLength(v) {
        return Math.sqrt((v[0]^2)+(v[1]^2));
    }

    /**
     * Rotate Vector2d by Z-axis
     *
     * @static
     * @param  {number[]} vector
     * @param  {number} rad
     * @return {number[]}
     */
    static rotate(vector, rad) {
        let result = [];
        let cos = Math.cos(rad);
        let sin = Math.sin(rad);
        result[0] = vector[0]*cos + vector[1]*sin;
        result[1] = -vector[0]*sin + vector[1]*cos;

        return result;
    }

    /**
     * Add vectors
     *
     * @static
     * @param {...number[]} v
     * @return {number[]}
     */
    static add(...v) {
        let x = 0;
        let y = 0
        for (var i = 0; i < v.length; i++) {
            x += v[i][0];
            y += v[i][1];
        }
        return [x,y];
    }

    /**
     * Multiply vector by number.
     *
     * @static
     * @param {number[]} v
     * @param {number} n
     * @return {number[]}
     */
    static multiplyByNumber(v, n) {
        return [v[0]*n, v[1]*n];
    }
}

export default Vector2d;
