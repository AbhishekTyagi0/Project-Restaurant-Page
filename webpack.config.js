const path = require("path");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080,
    },

 
};