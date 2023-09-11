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
let shadeBannerIndex = 0; // 다음 버튼을 누를때마다 인덱스 번호가 1씩 증가
const $shadebanner = document.querySelectorAll('#shade-banner > ul > li'); // ㄴ 1,2,3번 가져오기
const $shadebannerPrevBtn = document.querySelector('.shade-prev-btn');
const $shadebannerNextBtn = document.querySelector('.shade-next-btn');

function prevShadeBanner() {
    if(shadeBannerIndex <= 0){  // 1 -> 3으로 갈 경우
        shadeBannerIndex = $shadebanner.length - 1; // ㄴ길이 - 1 = 맨뒤 인덱스로 바꿈 
    } else {  // 3->2 , 2-> 1 으로 갈 경우
        shadeBannerIndex--;
    }

    for (let item of $shadebanner) {
        item.style.opacity = 0;
    }

    $shadebanner[shadeBannerIndex].style.opacity = 1;
}


function nextShadeBanner() {
    if(shadeBannerIndex >= $shadebanner.length - 1){ // 3 -> 1 
        shadeBannerIndex = 0;    
    } else { // 1->2, 2->3
        shadeBannerIndex++;
    }

    for (let item of $shadebanner){
        item.style.opacity = 0;
    }

    $shadebanner[shadeBannerIndex].style.opacity = 1;
}

$shadebannerPrevBtn.addEventListener('click', prevShadeBanner);
$shadebannerNextBtn.addEventListener('click', nextShadeBanner)


document.querySelector('.material-symbols-outlined').addEventListener('click', function(){
    document.querySelectorAll('.list-group')[0].classList.toggle('show');
})

