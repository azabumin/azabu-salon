@AGENTS.md

# AZABU SALON(アザブサロン) — プロジェクトガイド

ユーザーが提示した「スキンスパ(SKINSPA)」の imweb ベース韓国語エステサロンサイトのスペックをレファレンスに、
日本語版の別ブランド「AZABU SALON」として作った Next.js(App Router) + TypeScript + Tailwind v4 プロジェクト。
白ベース + ブラウンポイント(ユーザー指定)。

## 公開URL・デプロイ

- **GitHub repo:** https://github.com/azabumin/azabu-salon (public)
- **Live demo (GitHub Pages):** https://azabumin.github.io/azabu-salon/
- デプロイ: `npm run deploy`(`next build && gh-pages -d out --nojekyll`)。変更後は必ずこれを
  再実行しないとライブ版が古いまま。
- `next.config.ts` は `output: "export"` + `basePath: "/azabu-salon"` + `trailingSlash: true` の
  静的エクスポート構成(サーバー機能は一切使っていないので export と相性が良い)。
- **ハマった点:** 初回デプロイ時、`_next/static/chunks/*` が軒並み404になった。原因は GitHub Pages が
  デフォルトで Jekyll 処理を通し、アンダースコアで始まる `_next/` ディレクトリを静的サイトから除外して
  しまうため。`public/.nojekyll` を置くだけでは `gh-pages` パッケージ側がデフォルトでドットファイルを
  除外してしまい効果がなかった — 確実なのは `gh-pages -d out --nojekyll` の **`--nojekyll` フラグ**
  (deploy スクリプトに入れ済み)。似た静的サイトを GitHub Pages に出すときはこれを最初から入れておくこと。
- basePath 付きなので、ローカル `npm run dev` は `http://localhost:3400/azabu-salon` 配下で動く
  (ルートの `http://localhost:3400/` ではない)。

## 実行

```bash
npm run dev -- --port 3400
```

または `C:\work\.claude\launch.json` の `azabu-salon` 設定でプレビュー実行。

## デザイントークン

- `brand`(#6F5544, 温かみのあるブラウン) / `brand-light`(#B79A7E) / `brand-dark`(#4A382C)
- `footer`(#1A1613, ダーク背景専用) — 本文の `text`(#2B2B2B系ニュートラルグレー)とは別系統。
  元スペックの「本文はダークグレー、フッターだけネイビー/ブラック」を踏襲し、本文はブラウン味を足さず
  ニュートラルグレーのまま、アクセントだけブラウンにしている
- フォント: 見出し・ロゴは `font-serif`(Noto Serif JP)、本文は `font-sans`(Noto Sans JP) — どちらも
  `next/font/google` で自前ホスティング(以前の韓国語プロジェクトのような Pretendard ローカルファイル
  workaround は不要)

## 元スペックからのローカライズ判断

日本語・日本向けサイトとして不自然な韓国特化要素を、以下のように置き換えた:
- フッター SNS 3種: Instagram/Naver/KakaoTalk → **Instagram/LINE/X**
- 右下フローティングボタン: カカオチャンネル → **LINE**(緑の丸ボタン)
- 商品詳細の決済バッジ: カカオペイ → 汎用「各種オンライン決済対応」
- 商品情報開示表: 韓国式「통신판매신고번호」等の法定表記ではなく、施術系サービスに沿った項目
  (施術時間/ご予約方法/キャンセルポリシー/使用製品/施術者/ご注意事項)に置き換え
- 商品価格: ウォン→そのまま円換算せず、日本のエステ相場感で ¥13,000〜¥32,000 のレンジで独自設定
- 予約ページの WhatsApp + 英語コピーは意図的に**残した**(麻布=外国人客も多いエリアという想定、
  元サイトの「明洞店・外国人客向け」ポジショニングを踏襲)

## ルーティングの注意

- ヘッダーロゴは `/` にリンクするが、`/` と `/intro` は**同じ内容**(`components/IntroContent.tsx` を
  両方の `page.tsx` から呼んでいる、リダイレクトではなく複製)。元スペックが「ロゴ→/」「ナビ1番目→/intro」
  と別々の URL を指定していたための対応。
- `/programs/[idx]` は元スペックのクエリ文字列 `?idx=N` ではなく、素直な動的セグメントにした
  (Next.js の標準的な書き方を優先)。
- `/review` は「ビフォーアフター」ページ、`/20` は「お客様の声」ページ — 元スペックの imweb URL の
  命名ゆれ(スラッグと内容が一致しない)をそのまま踏襲しているので、直感に反するが仕様通り。

## カート

`contexts/CartContext.tsx` は [[riman_cosmetics_web_projects]] の `리만화장품홈피` と同じ
`useSyncExternalStore` + localStorage パターン。プログラム詳細ページの「カートに入れる」で実際に
ヘッダーのカートバッジが増える。決済・カートページ自体は未実装(モックの範囲)。

## 画像処理

実写真の代わりに `components/PlaceholderSwatch.tsx`(グラデーション+ラベル)を全画像枠に使用。
元スペックの「画像使用まとめ」表にある寸法(442×442, 607×455, 404×404, 1244×449 等)は各コンポーネントの
`aspect-*` クラスで再現済みなので、実写真差し替え時はサイズ調整不要で `next/image` に置き換えるだけでよい。
