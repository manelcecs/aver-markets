const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

const __basedir = path.resolve(__dirname, 'dist');
module.exports = {
    entry: './src/index.js',
    output: {
        path: __basedir,
        filename: 'bundle.js'
    },
    mode: 'development',
    resolve:
    {
        extensions: [
            '.js', '.jsx', '.ts'
        ],
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            
          }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: / \.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            }, {
                test: /\.s[ac]ss$/i,
                use: [
                    
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                    
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }), 
        new MiniCssExtractPlugin({filename:'[name].css'}),
        new NodePolyfillPlugin()
    ], 
    devServer: {static: {
        directory: __basedir},
        port: 3001,
        compress: true
    }

}