document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.main-image img');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const sizeButtons = document.querySelectorAll('.size-btn');

    let currentImageIndex = 0;
    const images = Array.from(thumbnails).map(thumb => thumb.src);

    function updateMainImage(index) {
        mainImage.src = images[index];
        thumbnails.forEach((thumb, i) => {
            if (i === index) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }

    // Thumbnail click handler
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            currentImageIndex = index;
            updateMainImage(currentImageIndex);
        });
    });

    // Arrow button click handlers
    arrowLeft.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateMainImage(currentImageIndex);
    });

    arrowRight.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateMainImage(currentImageIndex);
    });

    // Size button click handler
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove 'selected' class from all buttons
            sizeButtons.forEach(b => b.classList.remove('selected'));
            // Add 'selected' class to the clicked button
            btn.classList.add('selected');
        });
    });
});