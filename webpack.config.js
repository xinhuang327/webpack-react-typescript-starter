var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	context: __dirname + '/src', // `__dirname` is root of project and `src` is source
	entry: {
		'app': [
			'webpack-dev-server/client?http://0.0.0.0:8080',  // WebpackDevServer host and port
			'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
			'./app.tsx'
		],
	},
	output: {
		path: __dirname + '/dist', // `dist` is the destination
		filename: '[name].js',
		publicPath: "/dist",
	},
	devServer: {
		contentBase: __dirname + '/src',
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", '.scss', '.css', '.json']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					'react-hot-loader',
					'babel-loader',
					'ts-loader'
				],
				exclude: /node_modules/,
			},
			{
				test: /\.js$/, //Check for all js files
				use: ['babel-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						'css-loader',
						{
							loader: 'sass-loader',
							options: {
								outputStyle: "compressed"
							}
						}
					]
				})
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								localIdentName: '[name]__[local]___[hash:base64:5]'
							}
						},
					]
				}),
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								localIdentName: '[name]__[local]___[hash:base64:5]'
							}
						},
						'less-loader'
					]
				}),
			}
		]
	},
	devtool: "eval",
	plugins: [
		new ExtractTextPlugin("[name].css"),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.LoaderOptionsPlugin({
			options: {
				sassLoader: {
					includePaths: [
						'./node_modules'
					]
				},
				context: __dirname,
			},
		}),
	]
}