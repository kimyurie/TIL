'user strict'; // strict mode 엄격 모드

// mouse cicle envet

const circle = document.querySelector('.mouse_circle');

//html //이벤트를 추가하겠다 (매게체)
document.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX; //마우스의 x좌표
    const mouseY = e.pageY; //마우싀의 y좌표
    circle.style.display = 'block';
    circle.style.left = mouseX + 'px';
    circle.style.top = mouseY + 'px';
});

//mouse click envet

document.addEventListener('click', () => {
    const RANDOM_X_1 = Math.floor(Math.random() * 100);
    const RANDOM_Y_1 = Math.floor(Math.random() * 100);
    console.log(RANDOM_X_1, RANDOM_Y_1);

    /* 
    cicle.style.transform = "translete(RANDOM_X_1+"px+, RANDOM_Y_1"px)"
    */
});

// menu event

const MENU_ITEM = document.querySelectorAll('.menu_item');

MENU_ITEM.forEach((item) => {
    item.addEventListener('click', () => {
        const SUB_MENU = item.children[1];
        if (SUB_MENU.classList.contains('active')) {
            SUB_MENU.classList.remove('active');
        } else {
            SUB_MENU.classList.add('active');
        }
    });
});

// nav observee

// IntersectionObserver 옵션
const option = {
    root: null,
    rootMargin: '0px',
};

const NAV = document.querySelector('.nav_bar'); // css를 변경할 대상
const TARGET = document.getElementsByTagName('header'); // 감지 대상

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log('감지');
            NAV.classList.remove('fixed');
        } else {
            console.log('벗어남');
            NAV.classList.add('fixed');
        }
    });
});

observer.observe(TARGET[0]);

// 베너이벤트
