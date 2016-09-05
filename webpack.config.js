const path = require('path');
const babel_config = require('./webpack.babel.js');

const src_dir = path.resolve(__dirname, "src");

module.exports ={
	entry: './src/content/inject_watch_button.js',
	output: {
		filename: 'bundle.js',
		path: './built-webpack'
	},
	module: {
		loaders: [
		{
			test: /\.js$/,
			include: src_dir,
			loader: "babel-loader",
			query: babel_config
		},
		{
			test: /\.css$/,
			include: src_dir,
			loaders: ['style', 'css']
		}
		]
	}
}


