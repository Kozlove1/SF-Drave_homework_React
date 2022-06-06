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
                test: /\.(tsx|ts|js)$/,
                exclude: /node_modules/,
                use: "ts-loader"
           },
           {
               test: /\.css$/,
               use: ["style-loader", "css-loader"]
           },
           { 
               test: /\.txt$/, use: 'raw-loader' 
            },
           {
            test: /\.(png|jpg|svg|gif)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img',
            },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ]

}