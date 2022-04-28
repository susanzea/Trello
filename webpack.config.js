// const path = require('path');
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
// // ? ask about polyfill error
// // const webpack = require('webpack');
// // const nodeExternals = require("webpack-node-externals");

// module.exports = {
//     context: __dirname,
//     entry: './frontend/trelloh.jsx',
//     output: {
//         path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
//         filename: 'bundle.js'
//     },
//     // externalsPresets: { node: true },   // <-- here
//     // externals: [nodeExternals()],
//     resolve: {
//         extensions: ['.js', '.jsx', '*'],
//         fallback: {
//             "fs": false,
//             "tls": false,
//             "net": false,
//             "path": false,
//             "zlib": false,
//             "http": false,
//             "https": false,
//             "stream": false,
//             "crypto": false,
//             "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
//             "util": require.resolve("util/"),
//             "buffer": require.resolve("buffer/"),
//             "child_process": false,
//             "vm": false,
//             "os": false,
//             "constants": false
//         } 
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.jsx?$/,
//                 exclude: /(node_modules)/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/env', '@babel/react']
//                     }
//                 },
//             },
//             {
//                 test: /\.(png|jpe?g|gif)$/i,
//                 use: [
//                     {
//                         loader: 'file-loader',
//                         options: {
//                             name: '[name][md5:hash].[ext]',
//                             outputPath: 'webpack-assets/',
//                             publicPath: 'assets/webpack-assets'
//                         }
//                     }
//                 ]
//             }
//         ]
//     },
//     devtool: 'source-map'
//     // plugins: [
//     //     new NodePolyfillPlugin()
//     // ]
// };



const webpack = require('webpack');
const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    mode: 'production',
    stats: { errorDetails: true },
    context: __dirname,
    entry: './frontend/trelloh.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*'],
         fallback: {
            "fs": false,
            "child_process": false,
            "worker_threads": false,
            "uglify-js": false,
            "@swc/core": false,
            "esbuild": false,
            "inspector": false
        }
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
        new NodePolyfillPlugin(),
        new webpack.ContextReplacementPlugin(/jest-worker/),
        new webpack.ContextReplacementPlugin(/lazy-debug-legacy/),
        new webpack.ContextReplacementPlugin(/loader-runner/),
        new webpack.ContextReplacementPlugin(/terser-webpack-plugin/),
        new webpack.ContextReplacementPlugin(/webpack/)
    ]
};





