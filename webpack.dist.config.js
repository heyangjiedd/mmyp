const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "./src/index.js"),
    devtool: 'source-map',
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
                loader: ExtractTextPlugin.extract({use: ['css-loader?url=false', 'less-loader']}),
            },
            {
                test: /.css$/,
                loader: ExtractTextPlugin.extract({use: ['css-loader?url=false',]})
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ExtractTextPlugin("index.css")
    ],
    resolve: {
        alias: {
            "vue": "vue/dist/vue.min.js",
            "swiper": "swiper/dist/js/swiper.min.js"
        },
    },
    // optimization: {
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             sourceMap: true,
    //             uglifyOptions: {
    //                 output: {
    //                     comments: false,
    //                 },
    //             },
    //         }),
    //     ],
    // },
};
