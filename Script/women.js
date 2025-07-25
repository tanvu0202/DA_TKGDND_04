let currentSlide = 0;
const slidesPerView = 2; // Giảm số sản phẩm hiển thị do kích thước lớn hơn
const totalSlides = 5;
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


let currentSlide2 = 0;
const slidesPerView2 = 3; // Giảm số sản phẩm hiển thị do kích thước lớn hơn
const totalSlides2 = 6;
const maxSlide2 = totalSlides2 - slidesPerView2;

function product_Slider(direction) {
    const slider = document.getElementById('product_Slider');
    
    currentSlide2 += direction;
    

    if (currentSlide2 < 0) {
        currentSlide2 = 0;
    } else if (currentSlide2 > maxSlide2) {
        currentSlide2 = maxSlide2;
    }
    

    const translateX = currentSlide2 * 440;
    slider.style.transform = `translateX(-${translateX}px)`;
    

    updateButtonStates2();
}

function updateButtonStates2() {
    const prevBtn = document.querySelector('.prev-btn2');
    const nextBtn = document.querySelector('.next-btn2');
    
    prevBtn.disabled = currentSlide2 === 0;
    nextBtn.disabled = currentSlide2 === maxSlide2;
}


updateButtonStates2();