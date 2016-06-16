module.exports = {
    entry: "./static/js/index.js",
    output: {
        path: './public/js',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                presets : ['es2015']
              }
            }
        ]
    }
};
