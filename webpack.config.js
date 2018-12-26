const path = require('path');
const package     = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
            babel: 'babel-polyfill',
            vendor: Object.keys(package.dependencies),
            homePage: './js/page/home.js',

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "./dist/[name].bundle.js"
    },
    watch:true,
    resolve: { extensions: [".js", ".ts"] },
    devServer: {
    	disableHostCheck: true,
        compress: true,
        inline: true,
        port: '8081',
       
    },
    plugins: [
        new HtmlWebpackPlugin({
            // hash: true,
            title: 'Dashboard',
            myPageHeader: 'Dashboard',
            template: './html/home.html',
            chunks: ['vendor', 'homePage'],
            filename: 'index.html' //relative to root of the application
        }),
       

    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
