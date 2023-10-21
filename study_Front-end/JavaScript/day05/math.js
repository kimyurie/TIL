console.log(Math.min(1, 2, 3)); // 1
console.log(Math.max(1, 2, 3)); // 3
const a = [1, 2, 3, 4, 5];
console.log(Math.max(a)); // NaN
console.log(Math.max(...a)); // 5
console.log(Math.floor(4.5)); // 4

console.log(Math.squr(4)); // 2 (루트 4 ) ㄴ 몰라도댐
// 0 ~ 1
// 0.01 x 45 => 0.45 = 0
// 0.99 x 45 => 44...... = 44
// 0 ~ 44
// 1 ~ 45 (+1)
console.log(Math.floor(Math.random() * 45 + 1));
