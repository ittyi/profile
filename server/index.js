import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express()
const port = 9000
const config = require('../webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.get('/', (req, res) => {
    res.send('Hello World!')
    const app = ReactDOMServer.renderToString(<App />);

    const html = `
        <html lang="en">
        <head>
            <script src="client.js" async defer></script>
        </head>
        <body>
            <div id="root">${app}</div>
        </body>
        </html>
    `;

    // コンポーネントが埋め込まれたHTMLをレスポンス
    res.send(html);
})

app.use(express.static("./build"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})