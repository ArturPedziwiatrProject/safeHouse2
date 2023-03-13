const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    plugins: [
        new MiniCssExtractPlugin()
    ],
    entry: './src/main.js',
    output: {
        filename: 'index.js',
        path: resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.glsl$/,
                exclude: /node_modules/,
                use: [
                    'raw-loader',
                    'glslify-loader',
                ]
            },
        ],
    },
    mode: 'development',
    watchOptions: {
        ignored: '**/node_modules',
        aggregateTimeout: 200,
        poll: 1000,
    },
}