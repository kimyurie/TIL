/*
  String.prototype.charAt(index) 
                    .concat()
                    .indexOf()
                    .replace('a', 'b') // a라는 문자를 b로 바꾸는 것

    ex) "Hello".replace("e","o") // Hollo
               .replace(정규 표현식가능, 바꿀 문자)

                    .toLowerCase();
                    .toUpperCase();
                    .split();
                    .repeat(n);
*/
String.prototype.print = function () {
  // ㄴ print라는 함수 만들어준것
  console.log("문자열입니다");
};

const str = "Hello";
const num = 5;

console.log(str.charAt(4)); // o
console.log(str.concat(" Seongyong")); // Hello Seongyong
str.print(); // string prototype print 함수를 만들어줬으니까 모든 String 타입을 가지고 있는 값은 해당 함수 사용이 가능
"Seongyong".print();

// num.print(); // number type x

console.log(str.indexOf("e")); // 1
console.log(str.split("e")); // ["H", "llo"]
