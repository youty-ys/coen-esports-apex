# coen e-sports 公式サイト

## プロジェクト概要
- **プロジェクト名**: coen e-sports 公式サイト
- **目標**: ファッションブランドcoen主催のe-sports大会情報を提供
- **構成**: トップページ + 各イベントの特設ページ

## 主な機能
- ✅ トップページ（白赤基調のデザイン）
- ✅ イベント一覧セクション
- ✅ 追従ナビゲーションヘッダー
- ✅ 運営メンバー紹介
- ✅ 主催企業情報
- ✅ レスポンシブデザイン（PC・タブレット・モバイル対応）
- ✅ 第3回 Apex Legends 大会特設ページ
- ✅ ライブ配信埋め込み
- ✅ Discord統合

## 公開URL
- **本番環境**: https://1344b067.coen-e-sports.pages.dev/
- **トップページ**: https://coen-e-sports.pages.dev/（ルートディレクトリ）
- **過去大会ページ**: https://coen-e-sports.pages.dev/past-events/
- **Apex Legends大会ページ**: https://coen-e-sports.pages.dev/20260301_apexlegends/
- **GitHub**: https://github.com/youty-ys/coen-esports-apex

## データ構造
- **ストレージ**: 静的HTML（Cloudflare Pages）
- **データフロー**: 
  - Discord Widget API → メンバー数の自動更新
  - YouTube Embed → ライブ配信・チャット
  - 静的コンテンツ → Cloudflare CDN経由配信

## 技術スタック
- **プラットフォーム**: Cloudflare Pages
- **フロントエンド**: HTML + CSS + JavaScript（バニラJS）
- **デザイン**: カスタムCSS（白赤基調のブランドカラー）
- **フォント**: Google Fonts（Noto Sans JP + Rajdhani）
- **配信**: Cloudflare CDN
- **最終更新**: 2026年1月21日

## プロジェクト構成
```
webapp/
├── index.html              # トップページ（ルート）
├── css/
│   └── style.css           # 白赤基調のカスタムCSS
├── js/
│   └── main.js             # ナビゲーション・アニメーション
├── past-events/            # 過去大会ページ
│   ├── index.html          # 過去大会アーカイブ
│   └── style.css           # パンくずリストなど追加CSS
├── 20260301_apexlegends/   # Apex Legends大会ページ
│   ├── index.html          # イベントページ
│   ├── css/
│   │   └── style.css       # 黒赤基調のカスタムCSS
│   ├── js/
│   │   └── main.js         # カウントダウン・Discord連携
│   └── images/             # 画像アセット
├── .gitignore
├── package.json
├── wrangler.toml
└── README.md
```

## 開発ガイド

### 開発環境セットアップ
```bash
# 依存パッケージのインストール
npm install

# 開発サーバー起動（PM2）
pm2 start ecosystem.config.cjs

# ログ確認
pm2 logs --nostream
```

### デプロイ
```bash
# ルートディレクトリ全体をデプロイ
npx wrangler pages deploy . --project-name coen-e-sports

# 特定のディレクトリをデプロイ（Apexページのみ）
npx wrangler pages deploy 20260301_apexlegends --project-name coen-e-sports
```

### Gitワークフロー
```bash
# 変更をステージング
git add .

# コミット
git commit -m "feat: Add new feature"

# GitHubへプッシュ
git push origin main
```

## 完了した機能

### トップページ
- ✅ 白赤基調のブランドデザイン
- ✅ 追従ナビゲーションヘッダー
- ✅ ヒーローセクション（グラデーション背景）
- ✅ イベント一覧セクション（第1回〜第3回）
- ✅ 第3回Apex Legendsへのリンク（クリック可能）
- ✅ 第1回・第2回は準備中表示（クリック不可）
- ✅ 運営メンバーセクション
- ✅ 主催企業セクション
- ✅ フッター
- ✅ スムーススクロール
- ✅ フェードインアニメーション
- ✅ レスポンシブ対応（モバイルメニュー）

### Apex Legends大会ページ
- ✅ 黒赤基調のゲーミングデザイン
- ✅ レスポンシブヘッダーナビゲーション
- ✅ ヒーローセクション（Apex風デザイン）
- ✅ カウントダウンタイマー（2026-03-01 12:00:00まで）
- ✅ ライブ配信オーバーレイ（開場前表示・自動消去）
- ✅ YouTube Live配信埋め込み
- ✅ YouTube Liveチャット埋め込み
- ✅ イベント概要セクション（Apex Legendsリンク付き）
- ✅ スケジュール表示
- ✅ 大会ルール詳細（ポイントシステム）
- ✅ Discord Widget統合（メンバー数自動更新）
- ✅ 浮遊Discordアイコン（物理演算・カーソル逃げ）
- ✅ 過去大会アーカイブ
- ✅ 参加エントリーCTAセクション
- ✅ 運営チームメンバー紹介
- ✅ 主催企業情報
- ✅ iPhone SE（375px）対応
- ✅ YouTube iframe最適化（ログイベント削減）
- ✅ エラーハンドリング実装

## 未実装機能
- 第1回・第2回イベントページ（準備中）
- 過去大会の詳細ページ
- エントリーフォームの実装（現在はURL準備中）

## デザインコンセプト

### トップページ（白赤基調）
- **メインカラー**: coenレッド (#E60012) + ホワイト (#FFFFFF)
- **コンセプト**: クリーン、モダン、ファッションブランドらしい洗練さ
- **対象**: 一般ユーザー、初見の訪問者

### Apex Legendsページ（黒赤基調）
- **メインカラー**: coenレッド (#E60012) + Apexブラック (#0A0A0A)
- **コンセプト**: ゲーミング、エネルギッシュ、競技性
- **対象**: Apex Legendsプレイヤー、参加希望者

## 推奨される次のステップ
1. 第1回・第2回イベントページの作成
2. エントリーフォームの実装（Google Forms連携）
3. SEO最適化（メタタグの強化）
4. アクセス解析の導入（Google Analytics）
5. Discord Bot統合（全メンバー表示）
6. ソーシャルシェア機能の追加

## デプロイ状況
- **ステータス**: ✅ Active
- **プラットフォーム**: Cloudflare Pages
- **自動デプロイ**: GitHub連携（mainブランチ）
- **最終デプロイ**: 2026年1月21日
- **最新URL**: https://76cd8711.coen-e-sports.pages.dev/

## ライセンス
© 2026 coen e-sports. All rights reserved.
