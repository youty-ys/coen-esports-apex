const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generateOGP() {
    // キャンバスを作成（OGP標準サイズ: 1200x630）
    const width = 1200;
    const height = 630;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // 背景（白とグラデーション風）
    // グラデーションの代わりに単色＋パターンで表現
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, width, height);

    // 薄い赤のアクセント（右下）
    ctx.fillStyle = 'rgba(230, 0, 18, 0.03)';
    ctx.beginPath();
    ctx.arc(width, height, 400, 0, Math.PI * 2);
    ctx.fill();

    // 装飾的な赤いライン（上）
    ctx.strokeStyle = '#E60012';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(100, 150);
    ctx.lineTo(1100, 150);
    ctx.stroke();

    // 装飾的な赤いライン（下）
    ctx.beginPath();
    ctx.moveTo(100, 480);
    ctx.lineTo(1100, 480);
    ctx.stroke();

    // ロゴを読み込んで描画
    try {
        const logoPath = path.join(__dirname, '20260301_apexlegends/images/coen-logo.png');
        const logo = await loadImage(logoPath);
        
        // ロゴのサイズと位置
        const logoWidth = 200;
        const logoHeight = (logo.height / logo.width) * logoWidth;
        const logoX = (width - logoWidth) / 2;
        const logoY = 200;
        
        ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);
    } catch (error) {
        console.error('ロゴの読み込みに失敗:', error);
    }

    // E-SPORTSテキスト
    ctx.font = 'bold 120px Arial, sans-serif'; // Rajdhaniの代わりにシステムフォント
    ctx.fillStyle = '#E60012';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // テキストに影を追加
    ctx.shadowColor = 'rgba(230, 0, 18, 0.2)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetY = 10;
    
    ctx.fillText('E-SPORTS', width / 2, 380);

    // 影をリセット
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;

    // サブテキスト
    ctx.font = 'bold 32px Arial, sans-serif';
    ctx.fillStyle = '#666666';
    ctx.fillText('ゲームで繋がる、未来を創る', width / 2, 540);

    // 画像を保存
    const outputPath = path.join(__dirname, 'ogp.png');
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);
    
    console.log('✅ OGP画像を生成しました:', outputPath);
    
    // public/images/ ディレクトリにもコピー
    const publicDir = path.join(__dirname, 'public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }
    const publicPath = path.join(publicDir, 'ogp.png');
    fs.writeFileSync(publicPath, buffer);
    console.log('✅ OGP画像をpublicディレクトリにもコピーしました:', publicPath);
}

generateOGP().catch(console.error);
