const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const nodeExternals = require("webpack-node-externals");

module.exports = {
    mode: 'development',
    entry: './server/index.js',
    target: 'node',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.node$/,
                use: "node-loader"
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "swc-loader",
                    options: {
                        parseMap: true// babel-loader とともに使用する場合に必要 https://swc.rs/docs/usage/swc-loader#with-babel-loader
                    }
                }
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            async_hooks: false,
        },

    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new NodePolyfillPlugin()// Polyfill 設定?
    ],
    stats: {
        warningsFilter: /^(?!CriticalDependenciesWarning$)/
    },
    externalsPresets: { node: true },
    externals: [nodeExternals()],
};