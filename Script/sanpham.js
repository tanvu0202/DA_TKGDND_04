// ==== Jordan Slider (First Section) ====
let currentSlide = 0;
const slidesPerView = 3;
const totalSlides = 15;
const maxSlide = totalSlides - slidesPerView;

function slideProducts(direction) {
    const slider = document.getElementById('productSlider');

    currentSlide += direction;
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide > maxSlide) currentSlide = maxSlide;

    const translateX = currentSlide * 527;
    slider.style.transform = `translateX(-${translateX}px)`;

    updateButtonStates1();
}

function updateButtonStates1() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === maxSlide;
}

// ==== Shop by Sport Slider (Second Section) ====
let currentSlide2 = 0;
const slidesPerView2 = 3;
const totalSlides2 = 10;
const maxSlide2 = totalSlides2 - slidesPerView2;

function slideProducts2(direction) {
    const slider = document.getElementById('productSlider2');

    currentSlide2 += direction;
    if (currentSlide2 < 0) currentSlide2 = 0;
    if (currentSlide2 > maxSlide2) currentSlide2 = maxSlide2;

    const translateX = currentSlide2 * 527;
    slider.style.transform = `translateX(-${translateX}px)`;

    updateButtonStates2();
}

function updateButtonStates2() {
    const prevBtn = document.querySelector('.prev-btn-2');
    const nextBtn = document.querySelector('.next-btn-2');
    prevBtn.disabled = currentSlide2 === 0;
    nextBtn.disabled = currentSlide2 === maxSlide2;
}

// ==== Icon Card Horizontal Scroll ====
function scrollIcons(direction) {
    const scrollContainer = document.querySelector('.icon-card-container');
    const scrollAmount = 300;
    scrollContainer.scrollLeft += direction * scrollAmount;
}