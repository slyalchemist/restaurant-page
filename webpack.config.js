//weback.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    //add source map, rebundles every change automatically
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },

    //allows access to webpack plugin
    plugins: [
        //constructor call
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],

    module: {
        //describes what loaders necessary to process CSS files
        rules: [
            {
                test: /\.css$/i,
                //webpack runs loaders starting at end - css-loader must be last
                use: ["style-loader", "css-loader"]
            },
        ],
    },
};