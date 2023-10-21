/*
1. for of 사용 가능
2. 가독성 []접근법이 아닌 정확한 메서드를 통해 데이터를 찾아올 수 있음
3. 문자열이 아닌 값도 키로 사용 가능
 */

// http response status code( HTTP browser - server, server가 응답을 주는 http response)
const errobj = {
  404: "페이지가 없습니다",
  500: "서버 오류",
  400: "사용자 오류",
  401: "권한 오류",
};

const errMap = new Map([
  [404, "페이지가 없습니다"],
  [500, "서버 오류"],
  [400, "사용자 오류"],
  [401, "권한 오류"],
]);

// console.log(errobj.404); // 숫자여서 안됌(x)
// console.log(errobj[404]); // ""없어서 안됌 (x)

console.log(errMap.get(404));
errMap.set(200, "성공하였습니다");

for (let key of errMap.keys()) {
  console.log(key); // key
}

for (let value of errMap.values()) {
  console.log(value); // value
}

for (let entry of errMap) {
  console.log(entry); // key, value
  console.log(entry[0]); // key
  console.log(entry[1]); // value
}

// 맵 -> 객체
let mapObj = Object.fromEntries(errMap);
console.log(mapObj);

// 객체 <- 맵
let map = new Map(Object.entries(errobj));
console.log(map);
