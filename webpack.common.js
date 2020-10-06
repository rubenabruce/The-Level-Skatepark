const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { dirname } = require("path");

module.exports = {
    entry: {
        home: "./public/js/home.js",
        is_level_dry: "./public/js/is_level_dry.js",
        level_cafe: "./public/js/level_cafe.js",
        local_spots: "./public/js/local_spots.js",
        upload_spot: "./public/js/upload_spot.js"
    }, 
    module: {
         rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(svg|png|jpe?g|JPG|gif|mov)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "resources"
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: './public/resources/weather_icons/png', to: __dirname + '/dist/resources/weather_icons/[name].[ext]' },
                { from: './public/resources/level_imgs', to: __dirname + '/dist/resources/level_imgs/[name].[ext]' },
            ],
        }),
        new HtmlWebpackPlugin({
            title: 'Home',
            template: './public/html/home.html',
            filename: 'home.html',
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            title: 'Is Level Dry',
            template: './public/html/is_level_dry.html',
            filename: 'is_level_dry.html',
            chunks: ['is_level_dry']
        }),
        new HtmlWebpackPlugin({
            title: 'Level Cafe',
            template: './public/html/level_cafe.html',
            filename: 'level_cafe.html',
            chunks: ['level_cafe'],
        }),
        new HtmlWebpackPlugin({
            title: 'Local Spots',
            template: './public/html/local_spots.html',
            filename: 'local_spots.html',
            chunks: ['local_spots']
        }),
        new HtmlWebpackPlugin({
            title: 'Upload a Spot',
            template: './public/html/upload_spot.html',
            filename: 'upload_spot.html',
            chunks: ['upload_spot']
        })
    ],
    node: {
        fs: 'empty',
        net: 'empty'
    }
}