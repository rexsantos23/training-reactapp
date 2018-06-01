const path = require('path') //path from node
const HtmlWebpackplugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'customapp.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackplugin({
            template: './public/index.html'
        })
    ]
}