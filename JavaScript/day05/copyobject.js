const a = { name: '김성용' };
const b = { name: '김성용' };

const c = '김성용';
const d = '김성용';

console.log(a === b);
// false
// 참조에 의한 할당 (메모리 힙의 주소가 저장되는 것)

console.log(c === d);
// true

// 내가 b랑 똑같은 형태의 객체가 필요하다면
const e = b;
console.log(e === b);
// true

e.name = '기성용';
console.log(b);

// 1. 전개 연산자
const f = { ...b }; // const arr = [ ...d ]
console.log(f);
f.name = '김성용';

// 2. Obejct.assign
const newObject = Object.assign({}, b);

// 3. lodash deepclone...
