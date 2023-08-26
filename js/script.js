
const $menu = document.querySelector('menu');
const $hide_menu = document.querySelector('.hide_menu');
const padding = 64;
const hideMenuHeight = $hide_menu.offsetHeight; // ㄴ offsetHeight는 요소의 높이
$hide_menu.style.height= 0;

$menu.addEventListener('mouseover',() => {
    $hide_menu.style.height = `${hideMenuHeight + padding}px`;
    $hide_menu.style.padding = '32px';
});

$menu.addEventListener('mouseout',() => {
    $hide_menu.style.height = 0;
    $hide_menu.style.padding = 0;
});

