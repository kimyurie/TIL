const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error");
  }, 3000);
});

// promise가 여러개 있고 해당 promise를 한번에 실행해야 할 때
Promise.all([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

// promise의 all의 문제점 만약 3개의 요청 중 2개만 성공한다면 error, success
// promise all은 요청 중 한가지만 실패해도 catch에 데이터를 전송

Promise.allSettled([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

//ㄴ성공한 것은 status가 fulfilled 에 value에 값이 나오고 실패한 것은
// status가 rejected 이고 reason에 이유가 들어간다. catch로 빠지지 않고
// 모든 promise들이 다 실행 돼서 나오는 것이다. 따라서 status의 값에 따라서
// 다른 처리를 해주면서 사용하면 될 것이다

// 결과값을 예상할 수 없는 비동기 처리(비동기 이후 실행해야할 함수를 동기적으로 실행하기 위함)를 위하여
// resolve, reject로 나누어 then과 catch의 매개변수로 전달, 활용 가능

// 그러나 promise의 경우도 then을 활용하기는 하지만 똑같이 callback 함수를 사용하는 점에서
// 코드가 then이 연속적으로 일어난다던지 가독성이 좋지 않음
// async await의 등장
