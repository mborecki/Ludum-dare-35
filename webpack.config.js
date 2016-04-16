
var path = require('path');

module.exports = {
    resolve: {
        root: __dirname + 'app/',
        extensions: ['.es6.js', '.js', '']
    },

    entry: {
        javascript: __dirname + '/app/js/app'
    },

    output: {
        path: __dirname + '/app/js',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.es6.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ],

        postLoaders: [
            {
                include: path.resolve(__dirname, 'node_modules/pixi.js'),
                loader: 'transform?brfs'
            }
        ]
    }
}
