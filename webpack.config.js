var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	context: __dirname + '/src', // `__dirname` is root of project and `src` is source
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		'./app.tsx',
	],
	output: {
		path: __dirname + '/dist', // `dist` is the destination
		filename: 'bundle.js',
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
				loader: ['react-hot-loader', 'ts-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.js$/, //Check for all js files
				use: [{
					loader: 'babel-loader',
					options: { presets: ['es2015'] }
				}]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]__[local]___[hash:base64:5]'
						}
					},
					// 'postcss-loader',
				],
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]__[local]___[hash:base64:5]'
						}
					},
					'less-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							outputStyle: "compressed"
						}
					}
				]
			}
		]
	},
	devtool: "cheap-eval-source-map",
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("[name].css"),
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