# roots-support

iOS アプリ **Roots** の紹介ページ・プレスキット・サポートページ・プライバシーポリシー。GitHub Pages で公開している。

| ページ | URL | 用途 |
|---|---|---|
| 紹介（日） | `/`（`index.html`） | SNS などからの着地点。App Store Connect の**マーケティングURL** |
| プレスキット（日） | `/press/` | 紹介文・基本情報・アイコン・スクリーンショット・SNS 用画像 |
| サポート（日） | `/support.html`（`support.md`） | App Store Connect の**サポートURL**／アプリの「このアプリについて > サポート」の行き先 |
| プライバシーポリシー（日） | `/privacy.html` | App Store Connect の**プライバシーポリシーURL**／アプリ内ペイウォールのリンク先 |
| サポート（英） | `/en/` | 英語ローカライズ用 |
| プライバシーポリシー（英） | `/en/privacy.html` | 英語ローカライズ用 |

アプリ本体のリポジトリは別（private）。**このリポジトリは公開されるので、内部仕様・価格戦略・未公開の計画を書かないこと。**

## 編集するときの注意

### 1. アプリ側と連動する値がある

無料プランの範囲（習慣の個数上限・テーマカラーの数・連携の扱い）と無料トライアルの日数は、**このページ・アプリのコード・アプリ内のペイウォール・App Store Connect の4か所**に書かれている。片方だけ直すと、利用者から見れば誤記ではなく「話が違う」になる。

変更するときは、本体リポジトリの `docs/dev/process.md`「アプリ外に公開している値」の表を見て全部そろえる。

### 2. 価格は書かない

App Store Connect 側の値とズレると事故になるうえ、地域ごとに違う。「アプリの設定 > プレミアムプラン で確認」へ誘導する。

### 3. プライバシーポリシーの URL は変えない

アプリのコード（`PremiumLinks`）と App Store Connect の両方から参照されている。パスを変えるとリンク切れになり、審査で落ちる要因になる。

### 4. 紹介ページとプレスキットの文言は書き下ろさない

紹介文の真実源は本体リポジトリの `docs/dev/app-store-metadata.md`（サブタイトル・プロモーションテキスト・説明）。
ストアの文言を変えたら、`index.html` と `press/index.html` も同じ文に揃える。
紹介ページとプレスキットは minima を使わない独自の HTML で、見た目は `assets/css/site.css` に置いている。

### 5. 画像の出どころ

| ファイル | 出どころ（本体リポジトリ） |
|---|---|
| `assets/img/screens/*.png` | ストア用スクリーンショットと同じ撮影画面を、端末の枠に入れて書き出したもの |
| `press/files/screenshots/` | `design/store-screenshots/6.9/` |
| `press/files/social/` | `design/social-images/`（JPEG に変換） |
| `assets/img/appstore-badge-ja.svg` | Apple 公式の App Store バッジ（日本語・黒）。加工しない |
| `assets/img/og.jpg` | `design/social-images/instagram/01.png` を 1200×628 に縮めたもの（SNS で共有したときの画像） |

## ローカルでの確認

Jekyll（minima テーマ）で組んでいる。Markdown を編集して push すれば数分で反映される。
紹介ページとプレスキットは素の HTML なので、`python3 -m http.server` で開けば確認できる（サポートページは Jekyll が要る）。
