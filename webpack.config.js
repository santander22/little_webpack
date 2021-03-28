const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js']
    },
    //rules for working with babel
    module: {
        rules: [
        {//RegExp: any file starting with m or js
            test: /\.m?js$/,
            //not use node_modules
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}