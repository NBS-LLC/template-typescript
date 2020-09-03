const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './build/app.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Template - Typescript w/ Webpack',
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development"
};
