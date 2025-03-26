// Bubble
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('click', function () {
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

// Gallery 多实例支持
function initGallery(galleryElement) {
    const cards = galleryElement.querySelectorAll('.cards li');
    const prevBtn = galleryElement.querySelector('.actions .prev');
    const nextBtn = galleryElement.querySelector('.actions .next');

    let currentIndex = 0;
    const cardsPerView = 5;
    const centerIndex = Math.floor(cardsPerView / 2);
    const maxIndex = cards.length;

    function updateGallery() {
        cards.forEach((card, index) => {
            const offset = (index - currentIndex + maxIndex) % maxIndex;
            const visualIndex = offset > Math.floor(maxIndex / 2) ? offset - maxIndex : offset;

            if (Math.abs(visualIndex) <= centerIndex) {
                const scale = 1 - Math.abs(visualIndex) * 0.2;
                const opacity = 1 - Math.abs(visualIndex) * 0.2;
                card.style.transform = `translateX(calc(-50% + ${visualIndex * 16}rem)) scale(${scale})`;
                card.style.opacity = opacity;
                card.style.zIndex = cardsPerView - Math.abs(visualIndex);
            } else {
                card.style.transform = `translateX(0) scale(0.5)`;
                card.style.opacity = 0;
                card.style.zIndex = 0;
            }
        });
    }

    prevBtn?.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + maxIndex) % maxIndex;
        updateGallery();
    });

    nextBtn?.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % maxIndex;
        updateGallery();
    });

    updateGallery();
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.gallery').forEach(initGallery);
});
