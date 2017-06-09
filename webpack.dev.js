const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.comon.js');
const webpack = require('webpack');

module.exports = function(env) {
    return Merge(
        CommonConfig,{
            plugins: [
                new webpack.DefinePlugin({
                    'process.env': {
                        'NODE_ENV': JSON.stringify('dev')
                    }
                }),
                
            ],
        }
    )
}
