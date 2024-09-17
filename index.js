// HEADER ---- 7 September 2024
const gifUrls = [
    'url("boxingGif.webp")',
    'url("boxingGif2.gif")',
];
const backgroundGif = document.querySelector('.background-gif');
let currentIndex = 0;

function changeBackgroundGif() {
    currentIndex = (currentIndex + 1) % gifUrls.length;
    backgroundGif.style.backgroundImage = gifUrls[currentIndex];
}
backgroundGif.style.backgroundImage = gifUrls[currentIndex];
setInterval(changeBackgroundGif, 5000);

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
