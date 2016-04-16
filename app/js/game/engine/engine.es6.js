import _ from 'lodash'

import Images from './images.es6';
import Sounds from './sounds.es6';
import Level from './level.es6';
import GameObject from './gameObject.es6';
import ObjectFactory from './objectFactory.es6';
import Component from './component.es6';
import Script from './script.es6';
import BASIC_SCRIPTS from './basicScripts/index.es6';

import PIXIRenderer from './renderers/pixi.es6';

import geMath from './utils/math/math.es6';


/**
 * @description  Main engine object. Exported as library default.
 *
 * @default
 * @namespace Engine
 */
class Engine {
    constructor() {
        this.ver = 0;

        this._config = {};
        this._objects = [];
        this._levels = {};

        /* DEV */
        window.Engine = this;
    }

    setConfig(data) {
        _.extend(this.config, data)
    }

    get config() {
        return this._config;
    }

    get started() {
        return this._started || false;
    }
    set started(v) {
        this._started = v;
    }

    get lastUpdate() {
        return this._lU || this.config.window.performance.now();
    }
    set lastUpdate(v) {
        this._lU = v;
    }

    get levels() {
        return this._levels;
    }

    get objects() {
        return this._objects;
    }

    /**
     * Start
     */
    start() {
        console.info('Engine.start');

        this.lastUpdate = window.performance.now();
        this.started = true;
        this.loop();
    }

    stop() {
        this.started = false;
    }

    initRenderer() {
        switch(this.config.renderer) {
            case 'pixi':
            default:
                this.gameRenderer = new PIXIRenderer({
                    container: this.config.container
                });
        }
    }

    /**
     * @private
     */
    loop() {
        if (!this.started) return;
        requestAnimationFrame(() => this.loop());
        let now = this.config.window.performance.now();
        let deltaTime = now - this.lastUpdate;

        this.update(deltaTime / 1000);
        if (!this.drawing) {
            this.draw();
        } else {
            console.warn('Too slow');
        }
    }

    /**
     * @private
     */
    draw() {
        this.drawing = true
        this.gameRenderer.draw(() => {
            this.drawing = false
        })
    }

    /**
     * @private
     */
    update(deltaTime) {
        this.lastUpdate = window.performance.now();

        let oCount = this.objects.length;

        if (this.activeLevel) {
            this.activeLevel.update(deltaTime);
        }

        for (var i = 0; i < oCount; i++) {
            let o = this.objects[i];
            if (!o.destroyed && o.isUpdateable) {
                o.update(deltaTime);
            }
        }
    }

    addObject (object) {
        console.log('addObject', object)
        if (object.isDrawable) {
            this.gameRenderer.add(object);
        }

        this.objects.push(object);
    }

    addLevel (name, level) {
        if (typeof this.levels[name] !== "undefined") {
            console.warn(`Repeated level name ${name}`);
        }

        this.levels[name] = level;
    }

    runLevel (name) {
        if (typeof this.levels[name] === "undefined") {
            console.warn(`Level name unknow: ${name}`);
        } else {
            this.stopActiveLevel();
            let level = this.levels[name];

            this.activeLevel = level;
            this.activeLevel.start();
        }
    }

    stopActiveLevel() {
        if (this.activeLevel) {
            for(var i = 0; i < this.objects.length; i++) {
                this.objects[i].destroy();
            }
        }

        this.activeLevel = null;
    }
}

// Create Engine instatnce
const e = new Engine();

// Add modules references to Engine instance
e.geMath = geMath;
e.PIXI = PIXI;
e.Images = Images;
e.Level = Level;
e.GameObject = GameObject;
e.ObjectFactory = ObjectFactory;
e.Component = Component;
e.Script = Script;

export default e;

console.log(Component)

export {PIXI as PIXI};
export {Level as Level};
export {GameObject as GameObject};
export {ObjectFactory as ObjectFactory};
export {Images as Images};
export {Component as Component};
export {Script as Script};
export {geMath as geMath};
export {BASIC_SCRIPTS as BASIC_SCRIPTS};
