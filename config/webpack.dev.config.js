/**
 * Created by shenlisha on 2019/5/8.
 */
const config = require('./index');
const baseWebpackConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    output: {
        publicPath: config.dev.assetsPublicPath,
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrorsPlugin(),
        new webpack.ProvidePlugin({
            'Intact': 'intact',
        }),
    ],
    devServer: {
        port: 8081,
        disableHostCheck: true,
        hot: true,
    },
});