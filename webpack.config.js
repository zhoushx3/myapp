var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/dev-server',
		path.resolve(__dirname, 'static/js/app.js'),
	],
	// externals: {
	// 	'jquery': 'jQuery'
	// },//在Index.html中需要加入script引用
	resolve: {
		alias: {
			// 'react': './node_modules/react'//会使用压缩过的
		}
	},
	output: {
		path: __dirname,
		publicPath: '/static/',
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
		}, {
			test: require.resolve('jquery'),
			loader: 'expose?jQuery'
		}]
	},
	plugins: [
		// new webpack.DefinePlugin({
		// 	'process.env.NODE_ENV': 'development'
		// }),
		new webpack.HotModuleReplacementPlugin()
	]
}
