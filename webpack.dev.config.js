const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");
module.exports = {
    mode: "development",
    entry: {
        main: [path.resolve(__dirname, "./src/index.js")]
    },
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
            },
            {
                test: /.vue$/,
                loader: "vue-loader",
            },
            {
                test: /.less$/,
                loader: ['style-loader', 'css-loader?url=false', 'postcss-loader', 'less-loader'],
            },
            {
                test: /.css$/,
                loader: ['style-loader', 'css-loader?url=false', 'postcss-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    resolve: {
        alias: {
            "vue": "vue/dist/vue.js",
            "swiper": "swiper/dist/js/swiper.min.js"
        },
    },
    devServer: {
        disableHostCheck: true,
        contentBase: "./static/",
        host: "0.0.0.0",
        port: "8220",
        proxy: {
            '/api': 'http://127.0.0.1:5000',
        }
    }
};
