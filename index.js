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
// MAIN: TIMER FOR DISCOUNTS ---- 8 September 2024
const timer = document.querySelector('.discount-timer')
let countdown = 18 * 60 * 60
function discountTimer(){
    // 18:00:00

    const hour = Math.floor(countdown / 3600)
    const minutes = Math.floor(Math.floor(countdown % 3600) / 60)
    const seconds = countdown % 60

    timer.textContent = `${hour < 10? '0': ''}${hour}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    countdown--

    if(countdown < 0){
        countdown = 18 * 60 * 60
    }
}
const interval = setInterval(discountTimer, 1000)