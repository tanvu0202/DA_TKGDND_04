//slider.js
let currentSlide = 0;
const slidesPerView = 3; // Giảm số sản phẩm hiển thị do kích thước lớn hơn
const totalSlides = 10;
const maxSlide = totalSlides - slidesPerView;

function slideProducts(direction) {
    const slider = document.getElementById('productSlider');
    
    currentSlide += direction;
    

    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide > maxSlide) {
        currentSlide = maxSlide;
    }
    

    const translateX = currentSlide * 440;
    slider.style.transform = `translateX(-${translateX}px)`;
    

    updateButtonStates();
}

function updateButtonStates() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === maxSlide;
}
updateButtonStates();
// button puse
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('nikeVideo');
    const playButton = document.querySelector('.play-button');
    const playPauseButton = document.querySelector('.play-pause-button');
    const muteUnmuteButton = document.querySelector('.mute-unmute-button');
    const volumeUpButton = document.querySelector('.volume-up-button');
    const volumeDownButton = document.querySelector('.volume-down-button');

    // Tạm dừng video khi tải xong
    video.pause();

    // Chơi/Pause video
    playButton.addEventListener('click', () => {
        video.play();
        playButton.style.display = 'none';
        playPauseButton.style.display = 'block';
    });

    playPauseButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = '❚❚';
        } else {
            video.pause();
            playPauseButton.textContent = '▶';
        }
    });

    // Bật/Tắt âm thanh
    muteUnmuteButton.addEventListener('click', () => {
        video.muted = !video.muted;
        muteUnmuteButton.textContent = video.muted ? '🔇' : '🔊';
    });

    // Tăng âm lượng
    volumeUpButton.addEventListener('click', () => {
        if (video.volume < 1) {
            video.volume = Math.min(1, video.volume + 0.1);
        }
    });

    // Giảm âm lượng
    volumeDownButton.addEventListener('click', () => {
        if (video.volume > 0) {
            video.volume = Math.max(0, video.volume - 0.1);
        }
    });
});

// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    // --- Shop by Icons Carousel ---
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.icon-card');
    const prevBtn = document.querySelector('.prev_btn');
    const nextBtn = document.querySelector('.next_btn');
    const indicators = document.querySelectorAll('.indicator');

    if (!track || cards.length === 0 || !prevBtn || !nextBtn) return;

    const cardWidth = cards[0].offsetWidth + 20; // +20px cho khoảng cách
    const visibleCards = 4; // Số sản phẩm hiển thị cùng lúc
    let currentIndex = 0;
    const totalCards = cards.length;
    const totalPages = Math.ceil(totalCards / visibleCards);

    function updateCarousel() {
        const offset = -currentIndex * cardWidth;
        track.style.transform = `translateX(${offset}px)`;

        // Cập nhật indicators nếu có
        if (indicators.length > 0) {
            indicators.forEach((indicator, index) => {
                if (index === Math.floor(currentIndex / visibleCards)) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalCards - visibleCards) {
            currentIndex += visibleCards;
        } else {
            currentIndex = 0; // Quay lại đầu
        }
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= visibleCards;
        } else {
            currentIndex = totalCards - visibleCards; // Quay về cuối
        }
        updateCarousel();
    });

    // Nếu có indicators
    if (indicators.length > 0) {
        indicators.forEach((indicator, idx) => {
            indicator.addEventListener('click', () => {
                currentIndex = idx * visibleCards;
                updateCarousel();
            });
        });
    }

    updateCarousel();
});

// --- Slide sport ---
let currentSlide_2 = 0;
const slidesPerView_2 = 2; // Giảm số sản phẩm hiển thị do kích thước lớn hơn
const totalSlides_2 = 6;
const maxSlide_2 = totalSlides_2 - slidesPerView_2;

function slideShopbySport(direction) {
    const slider = document.getElementById('SbSSlider');
    
    currentSlide_2 += direction;
    

    if (currentSlide_2 < 0) {
        currentSlide_2 = 0;
    } else if (currentSlide_2 > maxSlide_2) {
        currentSlide_2 = maxSlide_2;
    }
    
    const translateX = currentSlide_2 * 527;
    slider.style.transform = `translateX(-${translateX}px)`;
    

    updateButtonStates_2();
}

function updateButtonStates_2() {
    const prevBtn = document.querySelector('.prev-btn_2');
    const nextBtn = document.querySelector('.next-btn_2');
    
    prevBtn.disabled = currentSlide_2 === 0;
    nextBtn.disabled = currentSlide_2 === maxSlide_2;
}


updateButtonStates_2();

