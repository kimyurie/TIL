const callback = (number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      number = number + 1;
      if (number < 5) return resolve(number);
      reject("err");
    }, 3000);
  });

const asyncAddNumber = async (number) => {
  // ㄴ this 안쓸거면 화살표 함수 쓰는게 더 가독성 좋음!

  /* ㄴ**try-catch문 async랑 많이 쓰임 !!
try{
    ... 실패할 수도 있는 (에러가 날 수도 있는 실행문)
}catch(err){
    ...에러처리
    console.error(err)
}
*/
  try {
    const result = await callback(number);
    console.log(result); //4// ㄴ얘 비동기임 왜냐하면 async 감싸져 있는 형태이므로 promise안에 속해있는 거임
    throw new Error(result);
    // 나 여기서 에러 해결 못하기 때문에 상위 에러 처리 시스템으로 넘기는 것

    const result2 = await callback(result);
    console.log(result2);
  } catch (err) {
    console.log(err, 123);
  }
};

// async function asyncAddNumber(number) {}

asyncAddNumber(3);
