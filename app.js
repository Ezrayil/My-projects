let thsvg=document.querySelector("div.th-searchbar svg")
let thinput=document.querySelector("div.th-searchbar input")

thsvg.addEventListener("mouseenter" ,function(){
    thinput.style.visibility="visible"
    
})

thsvg.addEventListener("mouseleave" ,function(){
     thinput.style.visibility="hidden"
     
     
})
console.log(thsvg);




let images = document.querySelectorAll('.slider-img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// نمایش اولین عکس در هنگام لود صفحه
images[currentIndex].classList.add('active');

// تغییر عکس هر 2 ثانیه
setInterval(showNextImage, 4000);



let index = 0; // نام جدید برای متغیر ایندکس
const commentDivs = document.querySelectorAll('.comment');
const totalComments = commentDivs.length;

// نمایش اولیه 3 کامنت
for (let i = 0; i < 3; i++) {
    commentDivs[i].style.display = 'block';
}

// تابع برای جابجایی کامنت‌ها
function moveComments() {
    // کامنت‌های قبلی را مخفی کن
    commentDivs[index].style.display = 'none';

    // به ایندکس بعدی برو
    index = (index + 1) % totalComments; // اگر به آخر رسید، به اول برگرد

    // کامنت‌های جدید را نمایش بده
    for (let i = 0; i < 3; i++) {
        commentDivs[(index + i) % totalComments].style.display = 'block';
    }

    // تاخیر برای حرکت نرم
    setTimeout(moveComments, 3000); // هر 3 ثانیه جابجا می‌شود
}

// شروع حرکت کامنت‌ها
setTimeout(moveComments, 3000);


// down shop
let imagess = document.querySelectorAll('.slider-img2');
let currentIndexx = 0;

function showNextImagee() {
    imagess[currentIndexx].classList.remove('active');
    currentIndexx = (currentIndexx + 1) % imagess.length;
    imagess[currentIndexx].classList.add('active');
}

// نمایش اولین عکس در هنگام لود صفحه
imagess[currentIndexx].classList.add('active');

// تغییر عکس هر 2 ثانیه
setInterval(showNextImagee, 4000);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


















