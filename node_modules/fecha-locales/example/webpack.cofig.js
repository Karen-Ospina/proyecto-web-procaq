const webpack = require('webpack');
const path = require('path');
const devServer = {
    colors: true,
    contentBase: path.join(__dirname, 'src'),
    outputPath: path.join(__dirname, 'dist'),
    port: 8000,
    publicPath: '/static/',
    quiet: false
};

module.exports = {
    context: path.join(__dirname, '/src'),
    entry: {
        app: [
            './'
        ]
    },
    devServer: devServer,
    output: {
        path: devServer.outputPath,
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
