/**
 * Created by sunsu on 2016/8/18.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:{index:'./src/index.js'},
    output:{filename:"./out/[name].js"},
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader:"babel?presets[]=es2015&presets[]=react"
            }
        ]
    },
    plugins:[]
}