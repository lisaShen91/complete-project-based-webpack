const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

function resolve(dir) {
    return path.resolve(__dirname, '..', dir)
}
module.exports = {
    entry: {
        app: './src/app/app.js'
    },
    output: {
        path: resolve('dist'),
        chunkFilename: '[name].js',
        filename: "[name].[hash].bundle.js",
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'kpc': 'kpc/@stylus',
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: resolve('node_modules'),
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
                            'resolve url': true,
                            // 使用import引入主题文件，详见定制主题
                            'import': resolve('node_modules/kpc/@stylus/styles/themes/ksyun/index.styl'),
                        }
                    }
                ]
            },
            {
                test: /\.(|svg|png|jpg|jpeg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                            // outputPath: './fonts/',
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
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
};