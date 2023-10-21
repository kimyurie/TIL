"use strict";

const bannerBox = document.querySelector("#bannerBox > ul");
const bannerItem = document.querySelectorAll(".banner_item");
//배열 반환

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const size = bannerItem[0].clientWidth;
//패딩을 포함한 넓이를 가지고오는 기능
//해당 요소의 길이를 가지고 온다
let counter = 0;

// addEventListener
// 이벤트를 동작시킵니다

// function(){} === ()=>{}
// click, wheel, mouseover, mouseleave, mousedbclick, keypress...

let banner = setInterval(() => {
    if (counter < bannerItem.length - 1) {
        counter++;
        bannerBox.style.transform = "translateX(" + -size * counter + "px)";
    } else if (counter === bannerItem.length - 1) {
        counter = 0;
        bannerBox.style.transform = "translateX(" + -size * counter + "px)";
    }
}, 5000);
//1000ms = 1초

nextBtn.addEventListener("click", () => {
    console.log("test");
    banner = setInterval(() => {
        if (counter < bannerItem.length - 1) {
            counter++;
            bannerBox.style.transform = "translateX(" + -size * counter + "px)";
        } else if (counter === bannerItem.length - 1) {
            counter = 0;
            bannerBox.style.transform = "translateX(" + -size * counter + "px)";
        }
    }, 5000);
    if (counter < bannerItem.length - 1) {
        counter++;
        bannerBox.style.transform = "translateX(" + -size * counter + "px)";
    } else if (counter === bannerItem.length - 1) {
        counter = 0;
        bannerBox.style.transform = "translateX(" + -size * counter + "px)";
    }
});

prevBtn.addEventListener("click", () => {
    clearInterval(banner);
    banner = setInterval(() => {
        if (counter < bannerItem.length - 1) {
            counter++;
            bannerBox.style.transform = "translateX(" + -size * counter + "px)";
        } else if (counter === bannerItem.length - 1) {
            counter = 0;
            bannerBox.style.transform = "translateX(" + -size * counter + "px)";
        }
    }, 5000);

    if (counter > 0) {
        counter--;
        bannerBox.style.transform = "translateX(" + -size * counter + "px)";
    } else {
        counter = bannerItem.length - 1;
        bannerBox.style.transform = "translateX(" + -size * counter + "px)";
    }
});

/*
setInterval 
:반복

ex)
setInterval(()=>{
    실행할문장
}. 반복할 시간)

*/
