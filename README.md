# 添加物スキャナーのランディングページ

添加物スキャナーはどんな食品添加物が使われているか簡単に調べられるアプリです。食品の添加物ラベルを読み取り、その内容をAI技術を活用して自動的に認識し、分析結果を表示します。

ランディングページのソースコードです。ソースコードは基本的な機能を備えた、Ver.1 まで公開する予定です。

## 技術構成

* Vue3
* Firebase

## 機能


| マーク | ステータス |
|---|---|
| ✅ | 対応済み |
| 🚧 | 今後対応予定 |


| ステータス | 項目 | 参考 URL |
|---|---|---|
| ✅ | GitHub Actions による自動デプロイ | |
| ✅ | GTM によるタグ配信 | [.env \| Nuxt](https://nuxt.com/docs/guide/directory-structure/env) [Variables \| GitHub Docs](https://docs.github.com/en/actions/learn-github-actions/variables) |


## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
