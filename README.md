# coen e-sports Apex Legends 大会サイト

## プロジェクト概要
- **プロジェクト名**: coen e-sports Apex Legends 大会
- **目標**: 第3回 Apex Legends 大会の情報提供および参加者募集
- **開催日**: 2026年3月1日 12:00-17:00

## 主な機能
- ✅ 大会概要とスケジュール表示
- ✅ カウントダウンタイマー
- ✅ YouTube配信埋め込み
- ✅ 参加エントリーフォーム
- ✅ Discordコミュニティ情報
- ✅ 過去大会アーカイブ
- ✅ レスポンシブデザイン

## 公開URL
- **本番環境**: https://coen-e-sports.pages.dev/20260301_apexlegends/
- **GitHub**: https://github.com/youty-ys/coen-esports-apex

## データ構造
- **ストレージ**: 静的HTML（Cloudflare Pages）
- **データフロー**: 
  - Discord Widget API → メンバー数の自動更新
  - YouTube Embed → ライブ配信・チャット・過去動画
  - Google Forms → 参加エントリー

## 技術スタック
- **プラットフォーム**: Cloudflare Pages
- **構成**: 純粋なHTML + CSS + JavaScript
- **配信**: Wrangler Pages（静的サイトホスティング）
- **最終更新**: 2026年1月19日

## 使い方

### 開発環境
```bash
# Wranglerで開発サーバー起動
npx wrangler pages dev 20260301_apexlegends --ip 0.0.0.0 --port 3000
```

### デプロイ
```bash
# Cloudflare Pagesへデプロイ
npx wrangler pages deploy 20260301_apexlegends --project-name coen-e-sports
```

## プロジェクト構成
```
webapp/
├── 20260301_apexlegends/
│   ├── index.html          # メインページ
│   ├── css/
│   │   └── style.css       # カスタムCSS
│   ├── js/
│   │   └── main.js         # JavaScript機能
│   └── images/             # 画像アセット
├── .gitignore
├── package.json
└── README.md
```

## 完了した機能
- ✅ レスポンシブヘッダーナビゲーション
- ✅ ヒーローセクション（グラデーション背景）
- ✅ カウントダウンタイマー（2026-03-01 12:00:00まで）
- ✅ エントリーボタン（期限管理・URL難読化）
- ✅ YouTube Live配信埋め込み
- ✅ YouTube Liveチャット埋め込み
- ✅ イベント概要セクション
- ✅ スケジュール表示
- ✅ 大会ルール詳細
- ✅ Discord Widgetとメンバー数表示
- ✅ 過去大会アーカイブ
- ✅ 運営チームメンバー紹介
- ✅ フッター情報
- ✅ YouTube iframe遅延読み込み対応
- ✅ エラーハンドリング実装

## 未実装機能
（なし - すべての基本機能は実装済み）

## 推奨される次のステップ
1. SEO最適化（メタタグの強化）
2. アクセス解析の導入（Google Analytics等）
3. 多言語対応（英語版の追加）
4. パフォーマンス最適化（画像の最適化等）

## デプロイ状況
- **ステータス**: ✅ デプロイ準備完了
- **ビルド**: 不要（静的HTML）
- **最終デプロイ**: 2026年1月19日（予定）
