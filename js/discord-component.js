/**
 * Discord Section Component
 * 共通のDiscordセクションを生成するコンポーネント
 */

function createDiscordSection(config = {}) {
    const {
        imagePath = 'images/discord-icon.png',
        serverName = 'coen e-sports',
        serverDescription = '公式Discordサーバー',
        discordUrl = 'https://discord.gg/8TpkyFmrjU',
        onlineCount = 11,
        totalCount = 50
    } = config;

    return `
    <section class="section discord-section" id="discord">
        <div class="container">
            <h2 class="section-title">
                <span class="title-en">JOIN OUR DISCORD</span>
                <span class="title-ja">Discordコミュニティ</span>
            </h2>
            
            <!-- 浮遊メンバーアイコン背景 -->
            <div class="floating-avatars-container" id="floatingAvatars"></div>
            
            <div class="discord-widget-container">
                <div class="discord-widget-card">
                    <!-- サーバーアイコン -->
                    <div class="discord-server-icon">
                        <img src="${imagePath}" alt="${serverName}">
                    </div>
                    
                    <!-- サーバー情報 -->
                    <div class="discord-server-info">
                        <h3 class="discord-server-name">${serverName}</h3>
                        <p class="discord-server-description">${serverDescription}</p>
                    </div>
                    
                    <!-- メンバー情報 -->
                    <div class="discord-members-info" id="discord-members">
                        <div class="member-stat">
                            <div class="status-dot online"></div>
                            <span class="member-count" id="online-count">${onlineCount}</span>
                            <span class="member-label">オンライン</span>
                        </div>
                        <div class="member-stat">
                            <div class="status-dot total"></div>
                            <span class="member-count" id="total-count">${totalCount}</span>
                            <span class="member-label">メンバー</span>
                        </div>
                    </div>
                    
                    <!-- 参加ボタン -->
                    <a href="${discordUrl}" target="_blank" class="discord-join-btn">
                        <svg width="24" height="24" viewBox="0 0 127.14 96.36" fill="currentColor">
                            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                        </svg>
                        <span>今すぐ参加する</span>
                        <svg class="arrow-icon" width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
    `;
}

/**
 * Discordセクションを指定の要素に挿入する
 * @param {string} targetSelector - 挿入先のセレクタ
 * @param {string} position - 挿入位置 ('beforebegin', 'afterbegin', 'beforeend', 'afterend')
 * @param {object} config - 設定オブジェクト
 */
function insertDiscordSection(targetSelector, position = 'beforebegin', config = {}) {
    const targetElement = document.querySelector(targetSelector);
    if (!targetElement) {
        console.error(`Target element not found: ${targetSelector}`);
        return;
    }
    
    const discordHTML = createDiscordSection(config);
    targetElement.insertAdjacentHTML(position, discordHTML);
    
    // Discordセクションの初期化（アニメーション、浮遊アイコンなど）
    initializeDiscordSection();
}

/**
 * Discordセクションの初期化
 * 浮遊アイコンのアニメーションなどを設定
 */
function initializeDiscordSection() {
    // 浮遊アイコンの生成（存在する場合）
    const floatingContainer = document.getElementById('floatingAvatars');
    if (floatingContainer && floatingContainer.children.length === 0) {
        // 浮遊アイコンのダミーデータ
        const avatarColors = ['#5865F2', '#57F287', '#FEE75C', '#EB459E', '#ED4245'];
        
        for (let i = 0; i < 8; i++) {
            const avatar = document.createElement('div');
            avatar.className = 'floating-avatar';
            avatar.style.backgroundColor = avatarColors[i % avatarColors.length];
            avatar.style.left = `${Math.random() * 80 + 10}%`;
            avatar.style.animationDelay = `${Math.random() * 5}s`;
            avatar.style.animationDuration = `${15 + Math.random() * 10}s`;
            floatingContainer.appendChild(avatar);
        }
    }
}
