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
 * Discord API連携と浮遊アイコンのアニメーションを設定
 */
function initializeDiscordSection() {
    // Discord API設定
    const DISCORD_SERVER_ID = '1425356056653074522';
    const DISCORD_INVITE_CODE = '8TpkyFmrjU';
    const DISCORD_WIDGET_API = `https://discord.com/api/guilds/${DISCORD_SERVER_ID}/widget.json`;
    const DISCORD_INVITE_API = `https://discord.com/api/v10/invites/${DISCORD_INVITE_CODE}?with_counts=true`;
    
    let floatingAvatars = [];
    let mouseX = 0;
    let mouseY = 0;
    let isMouseInDiscordSection = false;
    
    // マウス座標追跡
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Discordセクションへのマウス出入り検知
    const discordSection = document.getElementById('discord');
    if (discordSection) {
        discordSection.addEventListener('mouseenter', () => {
            isMouseInDiscordSection = true;
        });
        
        discordSection.addEventListener('mouseleave', () => {
            isMouseInDiscordSection = false;
        });
    }
    
    // Discord Widget更新関数
    async function updateDiscordWidget() {
        try {
            const widgetResponse = await fetch(DISCORD_WIDGET_API);
            
            if (widgetResponse.ok) {
                const widgetData = await widgetResponse.json();
                
                const onlineCount = widgetData.presence_count || 0;
                const onlineElement = document.getElementById('online-count');
                if (onlineElement) {
                    onlineElement.textContent = onlineCount;
                }
                
                try {
                    const inviteResponse = await fetch(DISCORD_INVITE_API);
                    if (inviteResponse.ok) {
                        const inviteData = await inviteResponse.json();
                        const memberCount = inviteData.approximate_member_count || 0;
                        const totalElement = document.getElementById('total-count');
                        if (totalElement) {
                            totalElement.textContent = memberCount;
                        }
                    }
                } catch (error) {
                    console.log('Invite API fallback');
                }
                
                if (widgetData.members && widgetData.members.length > 0) {
                    createFloatingAvatars(widgetData.members);
                }
                
                return;
            }
        } catch (error) {
            console.error('Failed to fetch Discord data:', error);
        }
        
        try {
            const inviteResponse = await fetch(DISCORD_INVITE_API);
            
            if (inviteResponse.ok) {
                const inviteData = await inviteResponse.json();
                
                const onlineCount = inviteData.approximate_presence_count || 0;
                const onlineElement = document.getElementById('online-count');
                if (onlineElement) {
                    onlineElement.textContent = onlineCount;
                }
                
                const memberCount = inviteData.approximate_member_count || 0;
                const totalElement = document.getElementById('total-count');
                if (totalElement) {
                    totalElement.textContent = memberCount;
                }
            }
        } catch (error) {
            console.error('Failed to fetch Discord data:', error);
            const onlineElement = document.getElementById('online-count');
            if (onlineElement) {
                onlineElement.textContent = '--';
            }
        }
    }
    
    // 浮遊アバター生成
    function createFloatingAvatars(members) {
        const container = document.getElementById('floatingAvatars');
        if (!container) return;
        
        container.innerHTML = '';
        floatingAvatars = [];
        
        members.forEach((member) => {
            const avatar = document.createElement('div');
            avatar.className = `floating-avatar ${member.status}`;
            
            const img = document.createElement('img');
            img.src = member.avatar_url;
            img.alt = 'Discord Member';
            img.loading = 'lazy';
            
            avatar.appendChild(img);
            
            const randomX = Math.random() * 80 + 10;
            const randomY = Math.random() * 80 + 10;
            
            avatar.style.left = `${randomX}%`;
            avatar.style.top = `${randomY}%`;
            
            const avatarData = {
                element: avatar,
                x: randomX,
                y: randomY,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            };
            
            floatingAvatars.push(avatarData);
            container.appendChild(avatar);
            
            avatar.addEventListener('contextmenu', (e) => e.preventDefault());
            avatar.addEventListener('dragstart', (e) => e.preventDefault());
        });
        
        animateFloatingAvatars();
    }
    
    // アニメーション関数
    function animateFloatingAvatars() {
        if (floatingAvatars.length === 0) return;
        
        const container = document.getElementById('floatingAvatars');
        if (!container) return;
        
        const rect = container.getBoundingClientRect();
        
        floatingAvatars.forEach((avatar, index) => {
            if (isMouseInDiscordSection) {
                const avatarRect = avatar.element.getBoundingClientRect();
                const avatarCenterX = avatarRect.left + avatarRect.width / 2;
                const avatarCenterY = avatarRect.top + avatarRect.height / 2;
                
                const dx = mouseX - avatarCenterX;
                const dy = mouseY - avatarCenterY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    const force = (150 - distance) / 150;
                    const angle = Math.atan2(dy, dx);
                    
                    avatar.vx -= Math.cos(angle) * force * 0.3;
                    avatar.vy -= Math.sin(angle) * force * 0.3;
                }
            }
            
            avatar.vx += (Math.random() - 0.5) * 0.02;
            avatar.vy += (Math.random() - 0.5) * 0.02;
            
            floatingAvatars.forEach((otherAvatar, otherIndex) => {
                if (index === otherIndex) return;
                
                const dx = avatar.x - otherAvatar.x;
                const dy = avatar.y - otherAvatar.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                const minDistance = 5;
                
                if (distance < minDistance && distance > 0) {
                    const force = (minDistance - distance) / minDistance;
                    const angle = Math.atan2(dy, dx);
                    
                    const pushForce = force * 0.2;
                    avatar.vx += Math.cos(angle) * pushForce;
                    avatar.vy += Math.sin(angle) * pushForce;
                    otherAvatar.vx -= Math.cos(angle) * pushForce;
                    otherAvatar.vy -= Math.sin(angle) * pushForce;
                }
            });
            
            avatar.vx *= 0.98;
            avatar.vy *= 0.98;
            
            const minSpeed = 0.01;
            if (Math.abs(avatar.vx) < minSpeed && Math.abs(avatar.vy) < minSpeed) {
                avatar.vx += (Math.random() - 0.5) * minSpeed * 2;
                avatar.vy += (Math.random() - 0.5) * minSpeed * 2;
            }
            
            avatar.x += avatar.vx;
            avatar.y += avatar.vy;
            
            if (avatar.x < 5 || avatar.x > 95) {
                avatar.vx *= -0.6;
                avatar.x = Math.max(5, Math.min(95, avatar.x));
            }
            if (avatar.y < 5 || avatar.y > 95) {
                avatar.vy *= -0.6;
                avatar.y = Math.max(5, Math.min(95, avatar.y));
            }
            
            avatar.element.style.left = `${avatar.x}%`;
            avatar.element.style.top = `${avatar.y}%`;
        });
        
        requestAnimationFrame(animateFloatingAvatars);
    }
    
    // 初回更新
    updateDiscordWidget();
    
    // 5分ごとに更新
    setInterval(updateDiscordWidget, 300000);
}
