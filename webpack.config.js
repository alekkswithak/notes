module.exports = {
    module: {
        rules: [
            {
                tests: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}