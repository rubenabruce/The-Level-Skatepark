const path = require("path");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist/home.html")
    },
    devServer: {
        contentBase: path.join(__dirname, "dist")
    }
});