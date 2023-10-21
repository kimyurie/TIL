let a = 5;

const pr = new Promise((resolve, reject) => {
  // ㄴresolve, reject 자리에는 암거나 써도 댐
  setTimeout(() => {
    a = a + 1;
    if (a === 6) {
      resolve(a);
    } else {
      reject("error");
    }
  }, 1000);
});

pr.then((res) => {
  // ㄴ위의 a가 여기서 res
  console.log(res); // a
  return res + 1;
})
  .then((res) => {
    // ㄴ then도 메소드 체이닝 가능
    console.log(res);
  })
  .then(() => {})
  .then(() => {})
  .catch((err) => {
    console.log(err); // "error"
  });
