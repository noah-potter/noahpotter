var path = require('path');
var webpack = require('webpack');

// Using https://github.com/gaearon/react-hot-boilerplate/blob/next/webpack.config.js

module.exports = {
	entry: [
		'babel-polyfill',
		'react-hot-loader/patch',
		// activate HMR for React

		'webpack-dev-server/client?http://0.0.0.0:3000',
		// bundle the client for webpack-dev-server
		// and connect to the provided endpoint

		'webpack/hot/only-dev-server',
		// bundle the client for hot reloading
		// only- means to only hot reload for successful updates

		'./src/index.js'
		// the entry point of our app
	],

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/build/'
	},

	resolve: {
		extensions: [ '.js', '.css' ],
		alias: {
			"app-moment": path.join(__dirname, 'src', 'vendor', 'moment.js')
		}
	},

	devtool: 'eval',

	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					'babel-loader'
				],
				exclude: /node_modules/
			},{
				test: /\.css$/,
				use: [
					'style-loader', 
					'css-loader?modules'
				],
				include: /flexboxgrid/
			},{
				test: /\.css$/,
				use: [
					'style-loader', 
					'css-loader'
				],
				include: /(pui-react-tooltip|pui-css-tooltips)/
			},{
				test: /\.json$/,
				use: [
					'json-loader'
				]
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],

	devServer: {
		host: '0.0.0.0',
		port: 3000,

		// respond to 404s with index.html
		historyApiFallback: true,
		publicPath: '/',
		contentBase: './public',

		// enable HMR on the server
		hot: true,
	}
};
