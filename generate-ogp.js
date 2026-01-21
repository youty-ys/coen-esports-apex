const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generateOGP() {
    // キャンバスを作成（OGP標準サイズ: 1200x630）
    const width = 1200;
    const height = 630;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // 背景（白一色）
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, width, height);

    // ロゴを読み込んで描画
    try {
        const logoPath = path.join(__dirname, '20260301_apexlegends/images/coen-logo.png');
        const logo = await loadImage(logoPath);
        
        // ロゴのサイズと位置（上部中央）
        const logoWidth = 380;
        const logoHeight = (logo.height / logo.width) * logoWidth;
        const logoX = (width - logoWidth) / 2;
        const logoY = 140;
        
        ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);
    } catch (error) {
        console.error('ロゴの読み込みに失敗:', error);
    }

    // E-SPORTSテキスト（黒、Rajdhani風の太字）
    ctx.font = '900 160px Arial, sans-serif';
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '12px';
    
    ctx.fillText('E-SPORTS', width / 2, 420);

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
