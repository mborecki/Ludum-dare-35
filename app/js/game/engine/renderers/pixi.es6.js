import PIXI from 'pixi.js';

class PIXIRenderer {
    draw (onComplete) {
        console.warn('TODO: PIXIRenderer.draw');

        if (typeof onComplete === 'function') {
            onComplete();
        }
    }
}

export default PIXIRenderer;
