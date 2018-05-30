import path from 'path' //path from node
import HtmlWebpackplugin from 'html-webpack-plugin'

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'customapp.js'
    },
    module: {
        rules: [
            {
                text: /\.js$/,
                exclude: /node_modules/,
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