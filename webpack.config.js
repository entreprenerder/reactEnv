const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/public"),
        publicPath: "/public",
        filename: "bundle.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "source-map-loader"
            },
            {
                test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /node_modules/,
                loader: 'url-loader'
            }
        ]
    }
};
