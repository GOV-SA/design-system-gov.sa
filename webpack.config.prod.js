const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const path = require('path');

module.exports = function(env, argv) {
    return {
        mode: 'production',
        entry: [
            './src/app.js'
        ],
        optimization: {
            minimizer: [
                new OptimizeCSSAssetsPlugin()
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                title: 'Gov.se Example Page',
                template: path.resolve('./src/index.html')
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new MinifyPlugin(),

        ],
        module: {
            rules: [{
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [{
                        loader: "file-loader",
                        options: {
                            outputPath: './scss/fonts',
                            name: "[name].[ext]",
                        },
                    }, ]
                },
                {
                    test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
                    use: [{
                            loader: "file-loader",
                            options: {
                                outputPath: './images',
                                name: "[name].[ext]",
                            },
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: false,
                                    quality: 45
                                },
                                // optipng.enabled: false will disable optipng
                                optipng: {
                                    enabled: true,
                                },
                                pngquant: {
                                    quality: '65-90',
                                    speed: 4
                                },
                                gifsicle: {
                                    interlaced: true,
                                    optimizationLevel: 3
                                },
                                // the webp option will enable WEBP
                                webp: {
                                    quality: 20
                                }
                            }
                        },
                    ],
                },
                {
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader',
                    }
                },
            ]
        }
    };
}