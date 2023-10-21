const date = new Date();
console.log(date);
const date2 = new Date(2022, 4);
console.log(date2);

const year = date.getFullYear();
const month = date.getMonth(); // 0~11 1월~12월
const ill = date.getDate();
const day = date.getDay(); // 0~6 일~토

console.log(year, month, ill, day); // ㄴ month는 0에서 부터 시작됨

date.setFullYear(year - 1);
date.setMonth(month - 1);

console.log(date.toLocaleDateString());
/*
p.s
toString() 문자열
toDateString() 시분초 생략 Set Dec 10 2022
toLocalString() 여러분들 현재 지역에 맞는 시간(한국표준시) 2022.12.10 오후 3시 4분
toLocalDateString() 현재 지역에 맞는 날짜 2022.12.10

*/

// ㄴ이런건 보통 라이브러리 써서 훨씬 쉽게 사용 가능
