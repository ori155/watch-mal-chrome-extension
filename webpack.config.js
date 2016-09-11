const path = require('path');
const babel_config = require('./webpack.babel.js');

const src_dir = path.resolve(__dirname, "./babeled/");

module.exports ={
	entry: {
		content: path.resolve(src_dir, 'content/inject_watch_button.js')
	},
	output: {
		filename: '[name].bundle.js',
		path: './built'
	},
	module: {
		loaders: [
	/*	{
			test: /\.js$/,
			include: src_dir,
			loader: "babel-loader",
			query: babel_config
		},*/
		{
			test: /\.css$/,
			include: src_dir,
			loaders: ['style', 'css']
		},
		{
			test: /\.(eot|woff|woff2|ttf|svg)$/,
			include: src_dir,
			loader: "file-loader"
		}
		]
	}
}


