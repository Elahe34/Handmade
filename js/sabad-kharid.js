let quantity = 1; // تعداد اولیه محصول

// انتخاب تمام دکمه‌های افزایش
document.querySelectorAll('.increase').forEach(button => {
  button.addEventListener('click', function() {
    quantity++;
    // بروزرسانی مقدار در تمام عناصر product-quantity
    document.querySelectorAll('.product-quantity').forEach(quantityElement => {
      quantityElement.textContent = quantity;
    });
  });
});

// انتخاب تمام دکمه‌های کاهش
document.querySelectorAll('.decrease').forEach(button => {
  button.addEventListener('click', function() {
    if (quantity > 1) {
      quantity--;
      // بروزرسانی مقدار در تمام عناصر product-quantity
      document.querySelectorAll('.product-quantity').forEach(quantityElement => {
        quantityElement.textContent = quantity;
      });
    }
  });
});