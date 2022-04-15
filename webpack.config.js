const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
// ? ask about polyfill error

module.exports = {
    context: __dirname,
    entry: './frontend/trelloh.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name][md5:hash].[ext]',
                            outputPath: 'webpack-assets/',
                            publicPath: 'assets/webpack-assets'
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new NodePolyfillPlugin()
    ]
};