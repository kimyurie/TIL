/* 
010-1234-1234
010-****-1234

split
함수, 어떠한 전화번화가 와도 가운데가 *로 표시
*/

function parsePhone(phone) {
    const origin = phone.split('-');
    // [ 010, 1234, 1234 ]
    origin[1] = '*'.repeat(origin[1].length);
    // [ 010, ****, 1234 ]
    console.log(origin.join('-'));
}
parsePhone('010-4567-1234');

// 0~45까지의 랜덤
const lotto = Array(7)
    .fill()
    // [ <7 empty> ]     0~1 * 45 ====> 0~45
    // Math.floor(Math.random() * 44 + 1)); 1~45
    .map(() => Math.floor(Math.random() * 45));

console.log(lotto);
