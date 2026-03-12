function updateTimer() {
    const now = new Date();
    const target = new Date();
    target.setHours(17, 30, 0, 0);

    const timerEl = document.getElementById('timer');

    if (now >= target) {
        timerEl.innerHTML = "CLOCK OUT!";
        timerEl.classList.add('exploded');
        return;
    }

    const diff = target - now;
    const h = Math.floor(diff / (1000 * 60 * 60)).toString().padStart(2, '0');
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const s = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');
    
    timerEl.innerHTML = `${h}:${m}:${s}`;
}

setInterval(updateTimer, 1000);
updateTimer();
