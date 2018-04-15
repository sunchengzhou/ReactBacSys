var path=require("path");
const webpack=require("webpack");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
    devtool:"eval-source-map",
    entry:path.resolve(__dirname+"/src/app.jsx"),
    output:{
        path:path.resolve(__dirname+"/public"),
        filename:"bundle.js"
    },
    resolve: {
        alias: {
            page: path.resolve(__dirname, 'src/page'),
            component: path.resolve(__dirname, 'src/component'),
            util: path.resolve(__dirname, 'src/util'),
            service: path.resolve(__dirname, 'src/service')
        }
    },
    devServer:{
        port:9000,
        historyApiFallback:true,
        proxy: {
            '/manage' : {
                target: 'http://admintest.happymmall.com',
                changeOrigin: true
            },
            '/user/logout.do': {
                target: 'http://admintest.happymmall.com',
                changeOrigin: true
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env', 'react']
                  }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env']
                  }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }         
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:__dirname+"/src/index.html",
            favicon:'./favicon.ico'
        }),
        new ExtractTextPlugin("index.css"),
        new webpack.HotModuleReplacementPlugin()
    ]  
}