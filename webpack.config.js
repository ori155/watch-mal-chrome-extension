const path = require('path');

var CopyWebpackPlugin = require('copy-webpack-plugin');

const babel_config = require('./webpack.babel.js');

const src_dir = path.resolve(__dirname, "./src/");
const vendor_dir = path.resolve(src_dir, "vendor/");

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
		{
			test: /\.js$/,
			include: src_dir,
			exclude: vendor_dir,
			loader: "babel-loader",
			query: babel_config
		},
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
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: path.resolve(src_dir, 'manifest.json') }
			])
	]
}


