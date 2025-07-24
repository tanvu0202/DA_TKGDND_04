   document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.scrollHeight > sidebar.clientHeight) {
     sidebar.style.overflowY = 'auto';
    }
   });

document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', (event) => {
            if (event.target.tagName !== 'A' && event.target.tagName !== 'IMG') {
                event.preventDefault();
            }

            const productId = card.dataset.productId;
            const productName = card.dataset.productName;
            const productSubtitle = card.dataset.productSubtitle;
            const productColor = card.dataset.productColor;
            const productPrice = card.dataset.productPrice;
            const productPriceOld = card.dataset.productPriceOld || '';
            const productDiscount = card.dataset.productDiscount || '';
            const productImagesString = card.dataset.productImages; // Lấy chuỗi JSON của mảng hình ảnh

            let productImages = [];
            try {
                productImages = JSON.parse(productImagesString); // Phân tích cú pháp chuỗi JSON thành mảng
            } catch (e) {
                console.error("Lỗi khi phân tích cú pháp dữ liệu hình ảnh sản phẩm:", e);
                // Xử lý lỗi hoặc sử dụng một hình ảnh mặc định nếu parsing thất bại
                productImages = [card.querySelector('img').src]; // Fallback về hình ảnh chính nếu có lỗi
            }

            const productDetails = {
                id: productId,
                name: productName,
                subtitle: productSubtitle,
                color: productColor,
                price: productPrice,
                priceOld: productPriceOld,
                discount: productDiscount,
                images: productImages // LƯU TRỮ MẢNG HÌNH ẢNH TẠI ĐÂY
            };

            localStorage.setItem('selectedProduct', JSON.stringify(productDetails));

            if (event.target.tagName !== 'A' && event.target.tagName !== 'IMG') {
                window.location.href = 'detail.html';
            }
        });
    });
});