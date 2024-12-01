let originalSrc = document.getElementById('connect').src;
let revertTimeout;

// تغيير الصورة عند النقر على الصور الصغيرة
function newSrc(imagePath) {
    const mainImage = document.getElementById('connect');

    // إلغاء أي Timeout سابق في حال تم تغيير الصورة مرة أخرى قبل انتهاء الوقت
    clearTimeout(revertTimeout);

    // تغيير الصورة إلى الصورة التي تم النقر عليها
    mainImage.src = imagePath;

    // تعيين Timeout لإرجاع الصورة الأصلية بعد 1 ثانية إذا لم يتم تغيير الصورة مجددًا
    revertTimeout = setTimeout(function() {
        mainImage.src = originalSrc;
    }, 3000); // 1000 مللي ثانية (1 ثانية)
}
