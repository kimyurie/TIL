// menu
const $menu = document.querySelector('menu');
const $hide_menu = document.querySelector('.hide_menu');
const padding = 64;
const hideMenuHeight = $hide_menu.offsetHeight; 
$hide_menu.style.height= 0;

$menu.addEventListener('mouseover',() => {
    $hide_menu.style.height = `${hideMenuHeight + padding}px`;
    $hide_menu.style.padding = '32px';
});

$menu.addEventListener('mouseout',() => {
    $hide_menu.style.height = 0;
    $hide_menu.style.padding = 0;
});

// shade banner
let shadeBannerIndex = 0;
const $shadebanner = document.querySelectorAll('#shade-banner > ul > li');
const $shadebannerPrevBtn = document.querySelector('.shade-prev-btn');
const $shadebannerNextBtn = document.querySelector('.shade-next-btn');

function prevShadeBanner() {
    if(shadeBannerIndex <= 0){
        shadeBannerIndex = $shadebanner.length - 1;
    } else {
        shadeBannerIndex--;
    }

    for (let item of $shadebanner) {
        item.style.opacity = 0;
    }

    $shadebanner[shadeBannerIndex].style.opacity = 1;
}

$shadebannerPrevBtn.addEventListener('click', prevShadeBanner);
