const arr = ["arr", "arr", "arr", "set", "set", "map"];
let set = new Set(arr);
console.log(set);

set.add("성용").add("상현").add("주희").add("주람").add("성용"); // 체이닝 : 반환값이 오브젝트이므로 해당 오브젝트의 내장함수를 사용 가능
console.log(set);
console.log(set.size);

// ㄴ아래는 배열로 만드는 법 두가징
const setArr = Array.from(set);
console.log(setArr);

const spreadSet = [...set];
console.log(spreadSet);
