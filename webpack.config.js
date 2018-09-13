const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		app: './src/app/app.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: path.resolve(__dirname, 'node_modules'),
				use: [
					{loader: 'babel-loader'}
				],
			},
			{
				test: /\.(styl|css)$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							url: true,
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								autoprefixer({
									browsers: [
										'last 2 versions',
										'ie >= 9',
									],
								})
							],
						}
					},
					{
						loader: 'stylus-loader',
						options: {
							'include css': true,
							sourceMap: false,
							// 使用import引入主题文件，详见定制主题
							'import': path.resolve(__dirname, 'node_modules/kpc/@stylus/styles/themes/ksyun/index.styl'),
						}
					}
				]
			},
			{
				test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: './fonts/',
						}
					}
				]
			},
			{
				test: /\.vdt$/,
				use: [
					{
						loader: 'babel-loader',
					},
					{
						loader: 'vdt-loader',
						options: {
							skipWhitespace: true,
							noWith: true,
							delimiters: ['{{', '}}'],
						}
					},
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new webpack.ProvidePlugin({
			'Intact': 'intact',
		}),
		new webpack.DefinePlugin({
			'process.ssr': false,
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	mode: 'development',
	devServer: {
		port: 8081,
		disableHostCheck: true,
		hot: true,
	},
	optimization: {
		splitChunks: {
			minSize: 1
		}
	},
	resolve: {
		alias: {
			'kpc': 'kpc/@stylus'
		}
	},
};