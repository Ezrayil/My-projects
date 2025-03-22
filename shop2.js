let icons = document.querySelector(".th-icon");
let isDark = false;
let shopinfos=document.querySelector(".shop-info")
let shoptxtp=document.querySelector(".shop-text-info p")
let shoptxth=document.querySelector(".shop-text-info h3")
let shopspn=document.querySelector(".counter span")
let coments=document.querySelector(".coments h2")
let discription=document.getElementById("home")
let info=document.getElementById("menu1")
let review=document.querySelector(".reviews-title")
let reviews=document.querySelector(".reviews-title span")
let mainreviw=document.querySelector(".reviews-main-text")
let mainreviws=document.querySelector(".reviews-main-text span")
let rating=document.querySelector(".reviews-rating")
let th=document.querySelector(".top-header")
let links = document.querySelectorAll(".th-menu a");
let image = document.querySelector(".top-header-icons");
let thicon=document.querySelector(".basket svg")
let thsearch=document.querySelector(".th-searchbar svg")
let jadvals=document.querySelectorAll(".jadval a")
let hicons=document.querySelector(".th-icon svg")






icons.onclick=turndark





function turndark(){
    if (isDark) {
        document.body.style.backgroundColor = "white"; 
        shopinfos.style.color = "";
        shoptxtp.style.color = "";
        shoptxth.style.color="";
        shopspn.style.color="";
        coments.style.color="";
        discription.style.color="";
        info.style.color="";
        review.style.color="";  
        reviews.style.color="";
        mainreviw.style.color="";
        mainreviws.style.color="";
        rating.style.color="";  
        th.style.backgroundColor="";
        links.forEach(link => link.style.color = "");
        image.src="img/Lucent-logo-dark.png"
        thicon.style.color="";
        thsearch.style.color="";
        jadvals.forEach(link => link.style.color = "");
        hicons.style.color="#121212";
        isDark = false; 
    } else {
        document.body.style.backgroundColor = "#121212";
         shopinfos.style.color = "white";
        shoptxtp.style.color = "white";
        shoptxth.style.color="white";
        shopspn.style.color="white";
        coments.style.color="white";
        discription.style.color="white";
        info.style.color="white";
        review.style.color="white";  
        reviews.style.color="white";
        mainreviw.style.color="white";
        mainreviws.style.color="white";
        rating.style.color="white";  
        th.style.backgroundColor="#3c3c3c";
        links.forEach(link => link.style.color = "white");
        jadvals.forEach(link => link.style.color = "black");

        image.src="img/Lucent-logo-light.png"
        thicon.style.color="white";
        thsearch.style.color="white";
        hicons.style.color="white";
        

        isDark = true; 
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    const numberElement = document.getElementById('number');
    let number = 1; // مقدار پیش‌فرض

    document.getElementById('increase').addEventListener('click', () => {
        number++;
        numberElement.textContent = number;
    });

    document.getElementById('decrease').addEventListener('click', () => {
        if (number > 0) { // جلوگیری از منفی شدن عدد
            number--;
            numberElement.textContent = number;
        }
    });
});



















let count = 1; // مقدار پیش‌فرض شمارشگر
const numberDisplay = document.getElementById('number');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const addToCartButton = document.querySelector('.add-to-cart-btn');
const basketCount = document.querySelector('.basket-count');

// افزایش عدد با کلیک بر روی دکمه مثبت
increaseButton.onclick = () => {
    count++;
    numberDisplay.textContent = count;
};

// کاهش عدد با کلیک بر روی دکمه منفی
decreaseButton.onclick = () => {
    if (count > 1) {
        count--;
        numberDisplay.textContent = count;
    }
};

// افزودن به سبد خرید
addToCartButton.onclick = () => {
    basketCount.textContent = count;
    basketCount.style.display = 'inline'; // نمایش عدد کنار سبد خرید
};




    // shop imgs
let mainimg=document.getElementById("main-img")
let imgs=document.querySelectorAll("div.shop-min-img img")
for (let i=0;i<imgs.length;i++){    
    imgs[i].onclick=moz
}

function moz(){
  let ali=this.getAttribute("src")  
    mainimg.setAttribute("src", ali)
    
}











    // discount


    document.addEventListener("DOMContentLoaded", function() {
        function generateRandomCode(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let result = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters[randomIndex];
            }
            return result;
        }
    
        function showPopup() {
            const popup = document.getElementById('popup');
            const discountCode = document.getElementById('discount-code');
            discountCode.textContent = generateRandomCode(5);
            popup.style.display = 'block'; 
        }
    
        function closePopup() {
            const popup = document.getElementById('popup');
            popup.style.display = 'none'; 
        }
    
        document.getElementById('close-btn').onclick = closePopup;
    
    
        setTimeout(showPopup, 5000);
    
        document.getElementById('copy-btn').onclick = function() {
            const discountCode = document.getElementById('discount-code').textContent;
            navigator.clipboard.writeText(discountCode).then(() => {
                alert("کد تخفیف کپی شد: " + discountCode);
            }).catch(err => {
                console.error('کپی کد ناموفق بود:', err);
            });
        };
    
    
        document.getElementById('apply-discount').onclick = function() {
            const inputCode = document.getElementById('stylish-input').value;
            const discountCode = document.getElementById('discount-code').textContent;
    
           
            if (inputCode === discountCode) {
                const originalPrice = parseInt(document.getElementById('original-price').textContent);
                const discountedPrice = originalPrice - 40000 ; // محاسبه قیمت جدید
                
          
                document.getElementById('original-price').textContent = discountedPrice.toString();
            } else {
                alert("کد تخفیف وارد شده صحیح نیست.");
            }
        };
    });