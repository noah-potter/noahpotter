var path = require('path');
var webpack = require('webpack');

// Using https://github.com/gaearon/react-hot-boilerplate/blob/next/webpack.config.production.js

function isExternal(module) {
	var userRequest = module.userRequest;

	if (typeof userRequest !== 'string') {
		return false;
	}

	return userRequest.indexOf('bower_components') >= 0 ||
			 userRequest.indexOf('node_modules') >= 0 ||
			 userRequest.indexOf('libraries') >= 0;
}

module.exports = {
	entry: './src/index.js',

	output: {
		filename: 'statuc.bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},

	resolve: {
		extensions: [ '.js', '.css' ],
		alias: {
			"app-moment": path.join(__dirname, 'src', 'vendor', 'moment.js')
		},
	},
	
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					'babel-loader'
				],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					'style-loader', 
					'css-loader?modules'
				],
				include: /flexboxgrid/,
			},
			{
				test: /\.css$/,
				use: [
					'style-loader', 
					'css-loader'
				],
				include: /(pui-react-tooltip|pui-css-tooltips)/
			},
			{
				test: /\.json$/,
				use: [
					'json-loader'
				]
			}
		]
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			comments: false
		}),
		// new webpack.optimize.CommonsChunkPlugin({ 
		// 	name: 'manifest' 
		// }),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.bundle.js',
			minChunks(module, count) {
				var context = module.context;
				return context && context.indexOf('node_modules') >= 0;
			}
		}),
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)
	]
};
