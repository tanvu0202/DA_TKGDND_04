document.addEventListener('DOMContentLoaded', function () {

    // Hàm chung để khởi tạo slider, hoạt động với cả scroll và transform
    function initializeSlider(options) {
        const {
            sliderElement,
            prevBtn,
            nextBtn,
            scrollAmount,
            transformSlideSize,
            isTransform = false,
            initialSlide = 0
        } = options;

        if (!sliderElement || !prevBtn || !nextBtn) return;

        let currentSlide = initialSlide;

        function updateButtons() {
            if (isTransform) {
                const totalSlides = sliderElement.children.length;
                const visibleSlides = sliderElement.parentElement.offsetWidth / transformSlideSize;
                const maxSlide = Math.floor(totalSlides - visibleSlides + 0.1);

                prevBtn.disabled = currentSlide <= 0;
                nextBtn.disabled = currentSlide >= maxSlide;
            } else {
                const maxScroll = sliderElement.scrollWidth - sliderElement.clientWidth;
                prevBtn.disabled = sliderElement.scrollLeft <= 0;
                nextBtn.disabled = sliderElement.scrollLeft >= maxScroll - 5;
            }
        }

        function slide(direction) {
            if (isTransform) {
                const totalSlides = sliderElement.children.length;
                const visibleSlides = sliderElement.parentElement.offsetWidth / transformSlideSize;
                const maxSlide = Math.floor(totalSlides - visibleSlides + 0.1);
                
                currentSlide += direction;
                if (currentSlide < 0) currentSlide = 0;
                if (currentSlide > maxSlide) currentSlide = maxSlide;

                const translateX = currentSlide * transformSlideSize;
                sliderElement.style.transform = `translateX(-${translateX}px)`;
            } else {
                sliderElement.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
            }
            // Cập nhật trạng thái nút sau khi hoàn tất animation
            setTimeout(updateButtons, isTransform ? 10 : 400); 
        }

        prevBtn.addEventListener('click', () => slide(-1));
        nextBtn.addEventListener('click', () => slide(1));
        
        // Nếu dùng scroll, lắng nghe sự kiện scroll để cập nhật nút
        if (!isTransform) {
            sliderElement.addEventListener('scroll', updateButtons);
        }

        // Cập nhật trạng thái ban đầu
        updateButtons();
    }

    // --- Khởi tạo Trending Products Slider (sử dụng scroll) ---
    initializeSlider({
        sliderElement: document.getElementById('trendingSlider'),
        prevBtn: document.getElementById('prevBtn'),
        nextBtn: document.getElementById('nextBtn'),
        scrollAmount: 340 // Giá trị cuộn cứng
    });

    // --- Khởi tạo Product Slider (sử dụng transform) ---
    // Tính toán kích thước slide linh hoạt dựa trên CSS
    const productCard = document.querySelector('#productSlider .product-card');
    const productCardWidth = productCard ? productCard.offsetWidth : 420;
    const productCardGap = 20; // Giả sử gap là 20px
    const productSlideSize = productCardWidth + productCardGap;

    initializeSlider({
        sliderElement: document.getElementById('productSlider'),
        prevBtn: document.querySelector('.prev-btn'),
        nextBtn: document.querySelector('.next-btn'),
        isTransform: true,
        transformSlideSize: productSlideSize
    });

    // --- Khởi tạo Shop by Sport Slider (sử dụng transform) ---
    // Sử dụng lại logic tính toán kích thước nếu có cùng cấu trúc
    initializeSlider({
        sliderElement: document.getElementById('SbSSlider'),
        prevBtn: document.querySelector('.prev-btn_2'),
        nextBtn: document.querySelector('.next-btn_2'),
        isTransform: true,
        transformSlideSize: 527 // Giữ lại giá trị cũ của bạn
    });

    // --- Shop by Icons Carousel (Logic này đã tốt, chỉ cần tinh chỉnh nhỏ) ---
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.icon-card');
    const iconPrevBtn = document.querySelector('.prev_btn');
    const iconNextBtn = document.querySelector('.next_btn');
    const indicators = document.querySelectorAll('.indicator');

    if (track && cards.length > 0 && iconPrevBtn && iconNextBtn && indicators.length > 0) {
        const cardWidth = cards[0].offsetWidth + 20;
        const visibleCards = 4;
        const totalCards = cards.length;
        let currentIndex = 0;

        function updateIconCarousel() {
            const offset = -currentIndex * cardWidth;
            track.style.transform = `translateX(${offset}px)`;
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === Math.floor(currentIndex / visibleCards));
            });
        }

        iconNextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + visibleCards >= totalCards) ? 0 : currentIndex + visibleCards;
            updateIconCarousel();
        });

        iconPrevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - visibleCards < 0) ? totalCards - visibleCards : currentIndex - visibleCards;
            updateIconCarousel();
        });

        indicators.forEach((indicator, idx) => {
            indicator.addEventListener('click', () => {
                currentIndex = idx * visibleCards;
                updateIconCarousel();
            });
        });

        updateIconCarousel(); // Khởi tạo ban đầu
    }

});