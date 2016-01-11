/**
 * Created by jade on 2016/1/7.1111111111
 */

var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin({
    filename:"assets.json"
});

module.exports = {
    entry :{
        index:"./src/entry.js"

    },//单入口文件
    output: {
        path: path.join(__dirname, 'out'),  //打包输出的路径
        filename: '[name]-[hash].js',              //打包后的名字
        publicPath: "./out/"                //html引用路径，在这里是本地地址。
    },

    module:{
        loaders: [

            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader','css-loader') },
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
            {test: /\.woff$/,   loader: "url?limit=10000&minetype=application/font-woff"},
            {test: /\.woff2$/,   loader: "url?limit=10000&minetype=application/font-woff"},
            {test: /\.ttf$/,    loader: "file"},
            {test: /\.eot$/,    loader: "file"},
            {test: /\.svg$/,    loader: "file"}
        ]
    },
    plugins:[
        new ExtractTextPlugin('[name]-[hash].css'),
        assetsPluginInstance

    ]
}