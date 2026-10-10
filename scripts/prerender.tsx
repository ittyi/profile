import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import AppServer from '../src/AppServer';

// webpack.docs.js の client ビルドが出力したファイル名（ハッシュ付き）を拾って HTML に埋め込む。
const docsDir = path.resolve(process.cwd(), 'docs');
const assets = fs.readdirSync(path.join(docsDir, 'assets'));
const js = assets.find((f) => f.endsWith('.js'));
const css = assets.find((f) => f.endsWith('.css'));
if (!js || !css) {
  throw new Error('docs/assets に client ビルドの成果物がありません');
}

const content = renderToString(<AppServer />);
const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ittyi.jp</title>
    <link rel="stylesheet" href="./assets/${css}">
    <script defer src="./assets/${js}"></script>
  </head>
  <body>
    <div id="root">${content}</div>
  </body>
</html>
`;

fs.writeFileSync(path.join(docsDir, 'index.html'), html);
console.log('docs/index.html を書き出しました');
