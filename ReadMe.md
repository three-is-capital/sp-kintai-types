# sp-kintai-types

勤怠管理システム（[sp-kintai-api](https://github.com/three-is-capital/sp-kintai-api)）の
モデル型を、クライアント（[chatgpt-gas](https://github.com/three-is-capital/chatgpt-gas)）へ
配布するための型定義パッケージ。

## 配布方針

**このパッケージは self-contained である。** Prisma のランタイム型に依存しないため、
consumer 側に `@prisma/client` をインストールする必要はない。

- **スカラーのみ**を含む。リレーション（`User.kintais` 等）は API レスポンスに含まれない
  ため、型にも出していない
- **`DateTime` は `string`**。JSON 越しに届くのは ISO 8601 文字列であり `Date` ではない
- **enum は型ユニオン**。本パッケージは JS を含まないため、実行時に値として参照できる
  const は提供しない（`type: 'YukyuDay' as HolidayType` のように型注釈で使う）

### なぜこの方針なのか（v0.2.0 の変更）

v0.1.6 までは Prisma が生成した `index.d.ts` をそのままコピーしていた。この生成物は
`@prisma/client/runtime/*` を import しているため、`@prisma/client` を持たない consumer では
`runtime` が解決できず、**モデル型がすべて `any` に潰れていた**。consumer 側の
`skipLibCheck: true` がこの解決失敗を隠すため typecheck は通ってしまい、長期間気づけない
状態だった（[chatgpt-gas#453](https://github.com/three-is-capital/chatgpt-gas/issues/453)）。

Prisma のランタイム型の import パスはメジャーごとに変わる（v6 は `runtime/library.js`、
v7 は `runtime/client.js`）ため、丸コピー方式では **consumer の `@prisma/client` を
「このパッケージをビルドした Prisma」と同メジャーに保つ**という運用上の拘束が生まれる。
self-contained にすることでこの拘束を無くした。

## 更新手順

**このリポジトリの `types/index.d.ts` を手で編集しないこと。** 生成元は sp-kintai-api の
`prisma/schema.prisma`（単一の真実源）である。

```sh
# sp-kintai-api 側で実行する（本リポジトリが兄弟ディレクトリにある前提）
cd ../sp-kintai-api
pnpm run types:generate     # types/index.d.ts を上書きする
```

その後、本リポジトリで:

```sh
pnpm install
pnpm run check               # 生成物が型として妥当か検証する
# package.json の version を bump（破壊的変更なら minor、フィールド追加なら patch）
git add -A && git commit -m "..." && git push origin main
```

最後に consumer 側でコミットハッシュを更新する。

```sh
cd ../chatgpt-gas
# package.json の sp-kintai-types のコミットハッシュを更新して pnpm install
pnpm run typecheck
```

詳細な運用手順は sp-kintai-api の `docs/runbooks/shared-types.md` を参照。

## 変更の検知

スキーマを変更したのに `types:generate` を忘れた場合、sp-kintai-api の
`tests/sharedTypesContract.test-d.ts`（型レベルのドリフト検知）が `pnpm run check:type` /
CI で落ちる。フィールド名の集合・nullable なフィールドの集合・enum の値集合を
Prisma 生成型と突き合わせている。
