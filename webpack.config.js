var path = require('path');

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		path.resolve(__dirname, 'static/app.js'),
	],
	resolve: {
		alias: {
			// 'react': './node_modules/react'//会使用压缩过的
		}
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			include: path.join(__dirname, 'static'),
			loader: 'babel',
			query: {
				presets: ['react']
			},
			noParse: ['./node_modules/react']//不用解析
		}, {
			test: /\.css$/,
			loader: 'style!css'
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url?limit=25000'
		}]
	}
}
