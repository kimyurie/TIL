const arr2 = [1, 2, 3, 4, 5];

function solution(arr, num) {
  const len = arr2.length;
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 10;
    if (arr[i] == num) {
      arr.splice(i, 1);
      arr[i] += 10;
    }
  }
  if (arr.length == len) {
    return "결과값이 없습니다";
  }
  return arr;
}
const a = solution(arr2, 12);
console.log(a);
