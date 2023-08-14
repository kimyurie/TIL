function rest(number, ...rest) {
  return { number, rest };
}

const answer = rest(5, 4, 3, 2, 1);
console.log(answer);
