const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = merge(common, {
    mode: "production",
    output: {        
        filename: '[name].[contentHash].bundle.js',
        path: path.resolve(__dirname, "dist")
    }
    // optimization: {
    //     minimizer: [
    //         new OptimizeCssAssetsPlugin()
    //     ]
    // }
    // plugins: [new MiniCssExtractPlugin({ filename: "[name].[contentHash].css"})],
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: [MiniCssExtractPlugin.loader, "css-loader"]
    //         },
    //     ]
    // }
});