document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('click', function (e) {
        // 清除已有 bubble
        document.querySelectorAll('.bubble-detail').forEach(el => el.remove());

        const rect = this.getBoundingClientRect();
        const bubble = document.createElement('div');
        bubble.className = 'bubble-detail down';
        bubble.innerHTML = `<p style="color: #dd5b0a; font-weight: normal;">${this.dataset.detail}</p>`;

        document.body.appendChild(bubble);

        const scrollTop = window.scrollY;

        bubble.style.left = `${rect.left + rect.width / 2}px`;
        bubble.style.top = `${rect.bottom + scrollTop + 10}px`;
    });
});

document.addEventListener('click', function (e) {
    if (!e.target.classList.contains('skill')) {
        document.querySelectorAll('.bubble-detail').forEach(el => el.remove());
    }
});
