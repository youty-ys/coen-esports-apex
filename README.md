# coen e-sports イベントサイト

第3回 coen e-sports Apex Legends 大会の特設ランディングページサイト

## 🎮 プロジェクト概要

このプロジェクトは、coen主催のe-sports大会イベント用の特設LPサイトです。今後、同様のイベントごとに専用ページを追加できるディレクトリ構造となっています。

## 📁 ディレクトリ構造

```
/
├── index.html                     # トップページ（リダイレクト）
├── 20260301_apexlegends/          # 第3回大会（Apex Legends）専用ページ
│   ├── index.html                 # メインHTML
│   ├── css/
│   │   └── style.css             # スタイルシート
│   ├── js/
│   │   └── main.js               # JavaScript（カウントダウンなど）
│   └── images/
│       ├── coen-logo.png         # coenロゴ
│       ├── favicon.png           # ファビコン
│       └── ogp.jpg               # OGP画像
└── README.md                      # このファイル
```

## 🌐 公開URL

### Cloudflare Pages
- **本番サイト**: https://coen-e-sports.pages.dev/
- **第3回 Apex Legends大会**: https://coen-e-sports.pages.dev/20260301_apexlegends/

### GitHub リポジトリ
- **ソースコード**: https://github.com/youty-ys/coen-esports-apex

### 現在実装済みページ
- **第3回 Apex Legends大会**: `/20260301_apexlegends/index.html`

### 今後追加予定のページ例
- `/20260415_valorant/` - 第4回大会（VALORANT）
- `/20260520_streetfighter/` - 第5回大会（ストリートファイター）
- など、イベントごとに追加可能

## ✨ 実装済み機能

### 🎯 第3回 coen e-sports Apex Legends 大会ページ

#### 基本情報
- **大会名**: 第3回 coen e-sports Apex Legends
- **開催日時**: 2026年3月1日 12:00-17:00
- **開催形式**: オンライン
- **参加人数**: 60名
- **参加費**: 無料
- **エントリー期限**: 2026年2月28日まで

#### 実装セクション
0. **ナビゲーションヘッダー**
   - 追従型ヘッダー（スクロールしても常に表示）
   - 各セクションへのアンカーリンク
   - レスポンシブハンバーガーメニュー（モバイル）

1. **ヒーローセクション**
   - coenロゴ表示
   - メインビジュアル（タイトル）
   - リアルタイムカウントダウンタイマー（2026年3月1日 12:00まで）
   - 参加エントリーボタン → Googleフォームへリンク
   - 配信視聴ボタン → YouTube Liveへリンク

2. **イベント概要**
   - 開催日時、開催形式、募集人数
   - 参加費、参加資格、エントリー期限
   - 6つのカード形式で視覚的に表示

3. **開催スケジュール**
   - タイムライン形式で時系列表示
   - 11:30 開場（配信開始）
   - 12:00 開会式
   - 12:45 試合開始

4. **大会ルール**
   - 対戦形式: 通常モード、5試合
   - 使用マップ: 5マップ表示
   - 順位ポイント表（1位〜20位）
   - キルポイント説明

5. **過去大会の様子**
   - 第2回VALORANT前夜祭（YouTube埋め込み）
   - 第2回VALORANT大会本編（YouTube埋め込み）

6. **Discordコミュニティ**
   - Discordサーバーへの参加誘導
   - 公式ロゴとアニメーション

7. **運営メンバー**
   - 7名のスタッフ名表示
   - カードレイアウト

8. **主催**
   - coenロゴとリンク表示
   - 公式サイトへのリンク

#### JavaScript機能
- ✅ 追従ナビゲーションヘッダー
- ✅ ハンバーガーメニュー（モバイル）
- ✅ リアルタイムカウントダウンタイマー（日・時・分・秒）
- ✅ スムーススクロール（アンカーリンク）
- ✅ スクロール連動フェードインアニメーション
- ✅ ボタンホバーエフェクト

#### デザイン特徴
- **カラースキーム**: coenレッド（#E60012）+ Apex公式レッド（#DA291C）+ ゴールド（#FFD700）
- **フォント**: Rajdhani（英数字）、Noto Sans JP（日本語）
- **雰囲気**: 未来的、かっこいい、e-sportsらしい高エネルギー感
- **アニメーション**: グロー効果、パルスアニメーション、ホバーエフェクト
- **レスポンシブ対応**: モバイル〜デスクトップまで完全対応

#### SEO・SNS対応
- **TDK最適化**: Title、Description、Keywordsを設定
- **OGP対応**: Facebook、Twitter等のSNSシェア時に画像とテキストが表示
- **Twitter Card**: 大きな画像付きカード表示
- **Favicon**: coen e-sportsロゴを設定
- **Canonical URL**: 正規URLを指定してSEO最適化

## 🔗 外部リンク

### 第3回大会関連
- **参加エントリー**: https://forms.gle/kkbe9oA6Joz8aMP36
- **配信URL**: https://www.youtube.com/live/SV-kG4EO4_A
- **Discord**: https://discord.gg/8TpkyFmrjU
- **主催（coen）**: https://party-co.jp/coen

### 過去大会アーカイブ
- **第1回 OverWatch 2 Part1**: https://www.youtube.com/live/3W9AW6dbNjg
- **第1回 OverWatch 2 Part2**: https://www.youtube.com/live/AHNG7e32DyY
- **第2回 VALORANT前夜祭**: https://www.youtube.com/live/dy9QETSAmzw
- **第2回 VALORANT本編**: https://www.youtube.com/live/dpZ4FQD-Uo8

## 🚀 今後の開発予定

### 実装済み
- ✅ トップディレクトリ（`/index.html`）のリダイレクトページ
- ✅ 追従ナビゲーションヘッダー
- ✅ Discordコミュニティセクション
- ✅ TDK・OGP・Favicon設定

### 未実装機能
  - 過去・今後の全大会一覧
  - coen e-sportsブランド紹介
  - ニュース・お知らせセクション

### 追加推奨機能
- [ ] 賞金・賞品情報セクション（決定次第追加）
- [ ] スポンサーロゴセクション（スポンサー確定後）
- [ ] SNSリンクセクション（Twitter、Discord等）
- [ ] FAQセクション
- [ ] 参加者向け詳細ルールPDF
- [ ] リアルタイムスコアボード（試合中）
- [ ] ギャラリー・写真セクション
- [ ] ニュースレター登録フォーム

### 次回イベント用テンプレート
現在の `/20260301_apexlegends/` をベースに、次回イベント用のテンプレートとして複製・カスタマイズ可能

## 📝 カスタマイズ方法

### 新しいイベントページを追加する場合
1. `/20260301_apexlegends/` ディレクトリを複製
2. ディレクトリ名を変更（例: `/20260415_valorant/`）
3. `index.html` 内の以下を編集:
   - 大会名、日時、ゲームタイトル
   - カウントダウンタイマーの目標日時（`js/main.js`）
   - 参加URL、配信URL
   - ルール内容
4. 必要に応じてカラースキームを調整（`css/style.css`の`:root`変数）

### カラーテーマの変更
`css/style.css` の先頭にある CSS変数を編集:
```css
:root {
    --coen-red: #E60012;        /* メインカラー */
    --apex-red: #DA291C;        /* アクセントカラー */
    --accent-gold: #FFD700;     /* 強調カラー */
}
```

### カウントダウンタイマーの変更
`js/main.js` の目標日時を編集:
```javascript
const targetDate = new Date('2026-03-01T12:00:00').getTime();
```

## 🛠 使用技術

- **HTML5**: セマンティックマークアップ
- **CSS3**: 
  - カスタムプロパティ（CSS変数）
  - Flexbox / Grid レイアウト
  - アニメーション、トランジション
  - レスポンシブデザイン
- **JavaScript（Vanilla）**:
  - カウントダウンタイマー
  - ナビゲーション制御（追従ヘッダー、ハンバーガーメニュー）
  - Intersection Observer API（スクロールアニメーション）
  - スムーススクロール
- **外部フォント**:
  - Google Fonts（Noto Sans JP, Rajdhani）

## 📱 ブラウザ対応

- Chrome / Edge（最新版）
- Firefox（最新版）
- Safari（最新版）
- モバイルブラウザ（iOS Safari, Chrome Mobile）

## 👥 運営メンバー

- 櫻井大稀
- 齋藤雄太
- 伊藤宏
- 森田陽介
- 猪狩俊
- 関口貴大
- 米田恵太

## 🏢 主催

**coen**  
https://party-co.jp/coen

---

## 📄 ライセンス

© 2026 coen e-sports. All rights reserved.

---

**作成日**: 2026年1月16日  
**最終更新**: 2026年1月16日