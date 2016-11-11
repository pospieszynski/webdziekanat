var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './javascripts/main.js',
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { 
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
};
