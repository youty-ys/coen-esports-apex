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