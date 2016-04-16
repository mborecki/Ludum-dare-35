import Promise from 'promise';

class Images {
    constructor() {
        this.images = {};
    }

    register (name, params) {
        return new Promise((resolve, reject) => {
            if (typeof this.images[name] !== "undefined") console.warn(`Repeat image name: ${name}`)

            let img = new Image();
            img.width = params.size[0];
            img.height = params.size[1];

            let buffer = document.createElement('canvas');
            this.addImage(name, buffer)

            img.onload = () => {
                buffer.width = params.size[0];
                buffer.height = params.size[1];
                buffer.getContext("2d").drawImage(img, params.origin[0], params.origin[1], params.size[0], params.size[1], 0, 0, params.size[0], params.size[1])
                resolve();
            }

            img.onError = () => {
                reject({
                    message: 'Image error',
                    data: {
                        name,
                        params
                    }
                });
            }

            img.src = params.url;
        })
    }

    addImage (name, canvas) {
        if (typeof this.images[name] !== "undefined") console.warn(`Repeat image name: ${name}`);
        this.images[name] = canvas;
    }

    getImage (name) {
        return this.images[name];
    }
}

export default new Images();
