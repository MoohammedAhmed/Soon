document.addEventListener('DOMContentLoaded', () => {
    
    // 1. تشغيل العداد التنازلي لـ (1 يونيو 2026)
    const targetDate = new Date("June 1, 2026 00:00:00").getTime();

    const countdownTimer = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        const dEl = document.getElementById("days");
        const hEl = document.getElementById("hours");
        const mEl = document.getElementById("minutes");
        const sEl = document.getElementById("seconds");

        if (dEl && hEl && mEl && sEl) {
            dEl.innerText = days < 10 ? "0" + days : days;
            hEl.innerText = hours < 10 ? "0" + hours : hours;
            mEl.innerText = minutes < 10 ? "0" + minutes : minutes;
            sEl.innerText = seconds < 10 ? "0" + seconds : seconds;
        }

        if (timeLeft < 0) {
            clearInterval(countdownTimer);
            const container = document.querySelector(".neon-countdown");
            if (container) {
                container.innerHTML = "<h2 class='orbitron' style='color:#ff1e39; text-shadow:0 0 15px #ff1e39; font-size: 2rem;'>SYSTEM_ONLINE</h2>";
            }
        }
    }, 1000);

    // 2. أنيميشن شريط التحميل النيون التفاعلي العشوائي
    let progress = 0;
    const maxProgress = 95; 
    const progressBar = document.getElementById('progressBar');
    const progressPercent = document.getElementById('progress-percent');

    if (progressBar && progressPercent) {
        const interval = setInterval(() => {
            if (progress >= maxProgress) {
                clearInterval(interval);
            } else {
                progress += Math.floor(Math.random() * 2) + 1; 
                if (progress > maxProgress) progress = maxProgress;
                
                progressBar.style.width = progress + '%';
                progressPercent.innerText = progress + '%';
            }
        }, 80);
    }
});

if (timeLeft < 0) {
    clearInterval(countdownTimer);
    const container = document.querySelector(".neon-countdown");
    if (container) {
        // بتنور نيون أخضر لما السيرفر يشتغل رسمي
        container.innerHTML = "<h2 class='orbitron' style='color:#00ff88; text-shadow:0 0 15px #00ff88; font-size: 2rem;'>SYSTEM_ONLINE</h2>";
    }
}