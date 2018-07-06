const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode:'production',
    entry: {
	index:['whatwg-fetch', 'babel-polyfill','./src/index.js'],
    },
    output: {
	filename: '[name]-bundle.js',
	path: path.resolve(__dirname, 'js')
    },
    module:{
    	rules: [
    	    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    	]
    },
};
