// --- Slide detail ---
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('.main-image-container img');
        const thumbnails = document.querySelectorAll('.thumbs img');
        const leftArrow = document.querySelector('.arrow-left');
        const rightArrow = document.querySelector('.arrow-right');
        let currentIndex = 0;

        // Show the first image
        images[currentIndex].classList.add('active');
        thumbnails[currentIndex].classList.add('selected');

        // Function to update the displayed image and highlight thumbnail
        function updateImage(index) {
            images.forEach((img, i) => {
                img.classList.remove('active');
                if (i === index) {
                    img.classList.add('active');
                }
            });

            thumbnails.forEach((thumb, i) => {
                thumb.classList.remove('selected');
                if (i === index) {
                    thumb.classList.add('selected');
                }
            });
        }

        // Event listener for the left arrow
        leftArrow.addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            updateImage(currentIndex);
        });

        // Event listener for the right arrow
        rightArrow.addEventListener('click', function() {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            updateImage(currentIndex);
        });

        // Event listeners for thumbnail clicks
        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', function() {
                currentIndex = index;
                updateImage(currentIndex);
            });
        });
    });

//slide You might also like.js
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


document.addEventListener('DOMContentLoaded', () => {
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    if (selectedProduct) {
        // ... (các phần khác để cập nhật tên, danh mục, giá)

        document.getElementById('product-detail-name').textContent = selectedProduct.name;
        document.getElementById('product-detail-category').textContent = selectedProduct.subtitle;

        const priceElement = document.getElementById('product-detail-price');
        if (selectedProduct.priceOld) {
            priceElement.innerHTML = `<del>${selectedProduct.priceOld}</del> <span>${selectedProduct.price} ${selectedProduct.discount}</span>`;
        } else {
            priceElement.textContent = selectedProduct.price;
        }
        document.getElementById('product-detail-color-shown').textContent = `Màu sắc hiển thị: ${selectedProduct.color}/ White/Sail/Metallic Gold/Gorge Green`;

        const mainProductImage = document.getElementById('main-product-image');
        const thumbsContainer = document.querySelector('.thumbs');
        thumbsContainer.innerHTML = ''; // Xóa các hình thu nhỏ hiện có

        // Lấy mảng hình ảnh từ dữ liệu sản phẩm
        const productImages = selectedProduct.images || [];

        // Nếu có hình ảnh, đặt hình ảnh chính và tạo hình thu nhỏ
        if (productImages.length > 0) {
            mainProductImage.src = productImages[0]; // Đặt hình ảnh đầu tiên làm hình ảnh chính mặc định
            mainProductImage.alt = selectedProduct.name;

            productImages.forEach((imagePath, index) => {
                const img = document.createElement('img');
                img.src = imagePath;
                img.alt = `${selectedProduct.name} hình thu nhỏ ${index + 1}`;
                img.tabIndex = 0;
                img.dataset.index = index; // Lưu trữ chỉ mục để dễ dàng chuyển đổi

                if (index === 0) {
                    img.classList.add('active'); // Đánh dấu hình thu nhỏ đầu tiên là đang hoạt động
                }

                thumbsContainer.appendChild(img);
            });

            // Thêm trình lắng nghe sự kiện cho các lần nhấp vào hình thu nhỏ để thay đổi hình ảnh chính
            const thumbnailImages = document.querySelectorAll('.thumbs img');
            thumbnailImages.forEach(thumb => {
                thumb.addEventListener('click', () => {
                    mainProductImage.src = thumb.src;
                    mainProductImage.alt = thumb.alt;
                    thumbnailImages.forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                    currentImageIndex = parseInt(thumb.dataset.index); // Cập nhật chỉ mục hiện tại
                });
            });

            // Logic băng chuyền hình ảnh với các nút mũi tên
            const arrowLeft = document.querySelector('.arrow-left');
            const arrowRight = document.querySelector('.arrow-right');
            let currentImageIndex = 0;

            const updateMainImage = (index) => {
                if (thumbnailImages.length > 0) {
                    mainProductImage.src = thumbnailImages[index].src;
                    mainProductImage.alt = thumbnailImages[index].alt;
                    thumbnailImages.forEach(t => t.classList.remove('active'));
                    thumbnailImages[index].classList.add('active');
                }
            };

            arrowLeft.addEventListener('click', () => {
                currentImageIndex = (currentImageIndex - 1 + thumbnailImages.length) % thumbnailImages.length;
                updateMainImage(currentImageIndex);
            });

            arrowRight.addEventListener('click', () => {
                currentImageIndex = (currentImageIndex + 1) % thumbnailImages.length;
                updateMainImage(currentImageIndex);
            });

        } else {
            console.warn('Không có hình ảnh nào được tìm thấy cho sản phẩm này.');
            mainProductImage.src = 'placeholder.png'; // Hình ảnh dự phòng
            mainProductImage.alt = 'Không có hình ảnh';
        }

    } else {
        console.warn('Không tìm thấy dữ liệu sản phẩm trong localStorage.');
        // Tùy chọn, chuyển hướng trở lại danh sách sản phẩm hoặc hiển thị thông báo
    }
});













