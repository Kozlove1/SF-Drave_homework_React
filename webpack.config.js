const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: "awesome-typescript-loader"
           },
           {
               test: /\.css$/,
               use: ["style-loader", "css-loader"]
           },
           { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ]

}