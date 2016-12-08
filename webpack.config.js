module.exports = {
    entry: {
        app: ['babel-polyfill', 'whatwg-fetch', "./dist/application/app.tsx"]
    },
    output: {
        path: "./dist/public/application",
        publicPath: "/dist/public/application",
        filename: "bundle.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    devtool: 'source-map',//debug tsx browser
    module: {
        loaders: [
            {test: /\.tsx?$/, loader: "ts-loader"}
        ],
        preLoaders: [
            {test: /\.js$/, loader: "source-map-loader"}
        ]
    },
    devtool: 'source-map',

    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "redux": "Redux"
    }
};