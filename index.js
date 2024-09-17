// MAKING HAMBURGER MENU ON THE NAVIGATION ---- 17 September 2024
// Get the necessary elements
    const navBtn = document.querySelector('.open-close-nav-btn');
    const nav = document.querySelector('.ul-nav');
    const icon = navBtn.querySelector('i');

    // Toggle the dropdown menu and icon
    navBtn.addEventListener('click', function () {
        nav.classList.toggle('open');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-x');
        icon.classList.toggle('rotate-icon'); // Add rotation effect
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function (event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnNavBtn = navBtn.contains(event.target);
        console.log(isClickOnNavBtn)
        // If clicking outside the nav and button, close the menu
        if (!isClickInsideNav && !isClickOnNavBtn && nav.classList.contains('open')) {
            nav.classList.remove('open');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-x');
            icon.classList.remove('rotate-icon'); 
        }
    });
// HEADER ---- 7 September 2024
const gifUrls = [
    'url("boxingGif.webp")',
    'url("boxingGif2.gif")',
];
const discountSet = [
    'url("BGBaron12.webp")',
    'url("https://cdn11.bigcommerce.com/s-1x2q3tkivy/products/3087/images/13012/PRO-HAND-WRAPS-RED_FIST__75116__35610.1677608821.1280.1280.jpg?c=1")',
    'url("https://www.a1sportingmemorabilia.co.uk/media/catalog/product/t/b/tb1645_-_tyson_fury_signed_red_gold_boxing_shorts-a1.jpg")'
]
const backgroundGif = document.querySelector('.background-gif');
const discountImg = document.querySelector('.discount-items-img');
let currentIndex = 0;
let currIndex = 0;

function changeBackgroundGif() {
    currentIndex = (currentIndex + 1) % gifUrls.length;
    backgroundGif.style.backgroundImage = gifUrls[currentIndex];
}
backgroundGif.style.backgroundImage = gifUrls[currentIndex];
function changeDiscountImg() {
    // Move the element to the left
    discountImg.style.left = '0%';
    discountImg.style.opacity = '0';
    discountImg.style.width = '0';
    // Change the background image after the movement completes
    setTimeout(() => {
        currIndex = (currIndex + 1) % discountSet.length;
        discountImg.style.backgroundImage = discountSet[currIndex];

        // Reset the position to the right and animate it back to the center
        discountImg.style.left = '100%';
        discountImg.style.opacity = '1';
        discountImg.style.width = '100%';
        setTimeout(() => {
            discountImg.style.left = '0';
        }, 10); // Delay to allow the reset before animating
    }, 400); // Match the transition duration in CSS
}

discountImg.style.backgroundImage = discountSet[currIndex]
setInterval(changeBackgroundGif, 5000);
setInterval(changeDiscountImg, 4500);

// ANIMATION WHEN USER SCROLLS DOWN ---- 14 September 2024
document.addEventListener('DOMContentLoaded', () => {
const categoryButtons = document.querySelectorAll('.category-btn');
const discountContainer = document.querySelector('.discount-container');
    // Create an IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once the element is in view
            }
        });
    }, {
        threshold: 0.15 // Trigger when 20% of the element is in view
    });

    // Observe each category button
    categoryButtons.forEach(button => {
        observer.observe(button);
    });
    observer.observe(discountContainer);
});

// MAIN: TIMER FOR DISCOUNTS ---- 8 September 2024
const timer = document.querySelector('.discount-timer')
let countdown = 18 * 60 * 60
function discountTimer(){
    // 18:00:00

    const hour = Math.floor(countdown / 3600)
    const minutes = Math.floor((countdown % 3600) / 60)
    const seconds = countdown % 60

    timer.textContent = `${hour < 10? '0': ''}${hour}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    countdown--

    if(countdown < 0){
        countdown = 18 * 60 * 60
    }
}
const interval = setInterval(discountTimer, 1000)

// MAKING THE FA-HEART CHANGE WHEN CLICKED ---- 15 September 2024
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.like-product button').forEach(button => {
        button.addEventListener('click', () => {
            const heartIcon = button.querySelector('i');
            heartIcon.classList.toggle('fa-regular');
            heartIcon.classList.toggle('fa-solid');
        });
    });
    const discountLike = document.querySelector('.like button')
    discountLike.addEventListener('click', () => {
        const heartIcon = discountLike.querySelector('i');
        heartIcon.classList.toggle('fa-regular');
        heartIcon.classList.toggle('fa-solid');
    })
});
// ADD TO CART AND FAVORITES FUNCTION (on hold)