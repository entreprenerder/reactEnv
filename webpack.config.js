module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/public"
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
            }
        ]
    }
};
