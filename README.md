# Storybookで18n対応コンポーネントの確認を簡単にする

以下の記事で紹介したコードをまとめたリポジトリです。
TODO: 記事リンク

## 使い方
このリポジトリをクローンして、以下のコマンドを実行することで、Storybookが起動できます。
```bash
  npm run storybook
```

## ディレクトリ
```
.storybook
├── main.ts
└── preview.ts # Toolbars, Decoratorの設定
src
├── App.tsx
├── I18nComponent.stories.tsx # i18n対応コンポーネントのStory
├── I18nComponent.tsx # i18n対応コンポーネント
├── index.css
├── languageContext.tsx # i18nのためのContext
├── languageDecorator.tsx # 言語をStoryに反映するためのDecorator
├── main.tsx
├── translation.json # 翻訳定義ファイル
└── vite-env.d.ts