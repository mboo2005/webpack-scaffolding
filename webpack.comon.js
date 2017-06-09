var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main:'./app/index.js'
        
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'build')
    },
    devtool: "source-map",
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            minChunks:function(module){
                return module.context && module.context.indexOf('node_modules') !==-1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'mainfest'
        }),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            title: 'Webpack Scaffolding',
            template:'./index.html'
        }),
    ],
    module:{
        rules:[{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }
        ]
    }
}
