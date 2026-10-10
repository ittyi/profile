const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// GitHub Pages (docs/) 向けの静的ビルド。
// client: ブラウザで hydrate するための JS と CSS を docs/assets/ に出力する。
// prerender: AppServer を HTML 文字列にして docs/index.html を書き出すスクリプトを作る。
const tsRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: { loader: "ts-loader" },
};
const cssRule = {
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader"],
};
const resolve = { extensions: ['.ts', '.tsx', '.js'] };

const client = {
    name: 'client',
    target: 'web',
    mode: 'production',
    entry: './src/index..tsx',
    output: {
        filename: 'assets/client.[contenthash:8].js',
        path: path.resolve(__dirname, 'docs'),
        publicPath: './',
        clean: true,
    },
    module: { rules: [tsRule, cssRule] },
    resolve,
    plugins: [new MiniCssExtractPlugin({ filename: 'assets/main.[contenthash:8].css' })],
};

const prerender = {
    name: 'prerender',
    dependencies: ['client'],
    target: 'node',
    mode: 'development',
    externals: [nodeExternals()],
    entry: './scripts/prerender.tsx',
    output: {
        filename: 'prerender.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: { rules: [tsRule, cssRule] },
    resolve,
    plugins: [new MiniCssExtractPlugin()],
};

module.exports = [client, prerender];
