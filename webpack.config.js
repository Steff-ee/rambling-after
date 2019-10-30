const path = require('path')
const webpack = require('webpack')

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [{ loader: 'ts-loader' }],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: { presets: ['@babel/env'] },
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name]-[hash:8].[ext]',
						},
					},
				],
			},
		],
	},
	resolve: { extensions: ['*', '.js', '.jsx', '.ts', '.tsx'] },
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist/'),
		port: 3000,
		publicPath: 'http://localhost:3000/dist/',
		hotOnly: true,
		historyApiFallback: true,
	},
	devtool: 'source-map',
	plugins: [new webpack.HotModuleReplacementPlugin()],
}
