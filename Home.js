document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.carousel-image');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let current = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = (i === index) ? 'block' : 'none';
        });
    }

    if (prevBtn && nextBtn && images.length > 0) {
        prevBtn.addEventListener('click', () => {
            current = (current === 0) ? images.length - 1 : current - 1;
            showImage(current);
        });

        nextBtn.addEventListener('click', () => {
            current = (current === images.length - 1) ? 0 : current + 1;
            showImage(current);
        });

        setInterval(() => {
            nextBtn.click();
        }, 2000);
    }
});

