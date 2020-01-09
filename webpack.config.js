module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif|jpeg)$/,
                loader: "url-loader?limit=100000",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
                        {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }
        ]
    }
}