// ===================================
// coen e-sports Apex Legends 大会
// メインJavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {

    // ===================================
    // ナビゲーション
    // ===================================
    
    const navbar = document.getElementById('navbar');
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    const navLinks = document.querySelectorAll('.navbar-menu a');
    
    // スクロール時のヘッダースタイル変更
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ハンバーガーメニューの開閉
    navbarToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navbarMenu.classList.toggle('active');
        document.body.style.overflow = navbarMenu.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    // メニューリンククリック時にメニューを閉じる
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // ===================================
    // カウントダウンタイマー
    // ===================================
    
    const targetDate = new Date('2026-03-01T12:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
    
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            document.querySelector('.countdown-label').textContent = 'EVENT STARTED!';
        }
    }
    
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // ===================================
    // エントリーボタンの自動無効化
    // ===================================
    
    // エントリー締切日時: 2026年3月1日 11:30
    const entryDeadline = new Date('2026-03-01T11:30:00').getTime();
    
    // エントリーURLを難読化（Base64エンコード + 分割）
    const entryUrlParts = [
        'aHR0cHM6Ly9mb3Jtcy5n', // https://forms.g
        'bGUva2tiZTlvQTZKb3o4', // le/kkbe9oA6Joz8
        'YU1QMzY='              // aMP36
    ];
    
    function checkEntryDeadline() {
        const now = new Date().getTime();
        const entryButtons = document.querySelectorAll('.entry-btn');
        
        if (now >= entryDeadline) {
            // 締切後: ボタンを無効化
            entryButtons.forEach(button => {
                button.style.pointerEvents = 'none';
                button.style.opacity = '0.5';
                button.style.cursor = 'not-allowed';
                button.style.backgroundColor = '#666';
                button.style.borderColor = '#666';
                
                // hrefを削除してURLを隠す
                button.removeAttribute('href');
                button.removeAttribute('target');
                button.removeAttribute('data-entry-url');
                
                // クリックイベントを無効化
                button.onclick = (e) => {
                    e.preventDefault();
                    return false;
                };
                
                // テキストを変更
                const span = button.querySelector('span');
                if (span && span.textContent.includes('参加エントリー')) {
                    span.textContent = 'エントリー受付終了';
                }
            });
        } else {
            // 締切前: 難読化されたURLを復号して設定
            const decodedUrl = entryUrlParts.map(part => atob(part)).join('');
            
            entryButtons.forEach(button => {
                if (!button.hasAttribute('href') || button.getAttribute('href') === '#') {
                    button.setAttribute('href', decodedUrl);
                    button.setAttribute('target', '_blank');
                }
            });
        }
    }
    
    // 初回チェック
    checkEntryDeadline();
    
    // 30秒ごとに再チェック
    setInterval(checkEntryDeadline, 30000);
    
    // ===================================
    // Discord Widget API
    // ===================================
    
    const DISCORD_SERVER_ID = '1425356056653074522';
    const DISCORD_WIDGET_API = `https://discord.com/api/guilds/${DISCORD_SERVER_ID}/widget.json`;
    
    async function updateDiscordWidget() {
        try {
            const response = await fetch(DISCORD_WIDGET_API);
            
            if (response.ok) {
                const data = await response.json();
                
                // オンライン人数を更新
                const onlineCount = data.presence_count || 0;
                document.getElementById('online-count').textContent = onlineCount;
                
                // 総メンバー数を更新（Widget APIから取得可能な場合）
                if (data.members && data.members.length) {
                    // 表示されているメンバー数（実際の総数より少ない可能性あり）
                    document.getElementById('total-count').textContent = data.members.length + '+';
                }
                
                console.log('Discord Widget updated:', data);
            } else {
                console.log('Discord Widget is disabled. Please enable it in server settings.');
                // Widgetが無効の場合、デフォルト値を表示
                document.getElementById('online-count').textContent = '--';
            }
        } catch (error) {
            console.error('Failed to fetch Discord Widget:', error);
            document.getElementById('online-count').textContent = '--';
        }
    }
    
    // 初回ロード
    updateDiscordWidget();
    
    // 5分ごとに更新
    setInterval(updateDiscordWidget, 300000);
    
    // ===================================
    // スムーススクロール
    // ===================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===================================
    // スクロールアニメーション
    // ===================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    // フェードインアニメーション
    const fadeInElements = document.querySelectorAll('.overview-item, .rule-card, .past-event-card, .team-member');
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    fadeInElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(element);
    });
    
    // タイムラインアニメーション
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 200);
                timelineObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        timelineObserver.observe(item);
    });
    
    // ===================================
    // コンソールメッセージ
    // ===================================
    
    console.log('%c🎮 第3回 coen e-sports Apex Legends', 'color: #E60012; font-size: 20px; font-weight: bold;');
    console.log('%c大会開催日時: 2026年3月1日 12:00-17:00', 'color: #FFD700; font-size: 14px;');
    console.log('%c主催: coen (https://party-co.jp/coen)', 'color: #B8B8B8; font-size: 12px;');

});