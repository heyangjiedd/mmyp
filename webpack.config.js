const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, "./static/"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            }, {
                test: /.vue$/,
                loader: "vue-loader"
            }, {
                test: /.less$/,
                loader: ExtractTextPlugin.extract({use: ['css-loader?url=false', 'less-loader']})
            }, {
                test: /.css$/,
                loader: ExtractTextPlugin.extract({use: ['css-loader?url=false']})
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ExtractTextPlugin("index.css")
    ],
    resolve: {
        alias: {
            "vue": "vue/dist/vue.js"
        }
    }
};
