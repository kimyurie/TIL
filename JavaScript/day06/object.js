const students = {
  apple: "이주현님",
  banana: "조상현님",
  orange: "장영승님",
};

const { apple, banana, orange: name } = students;

console.log(apple, banana);
console.log(name);

//----------------------------------------------

const user = ["이주람님", "조상현님", "장영승님"];
const [lee, jo, jang] = user;

console.log(jang); // 장영승님
console.log(lee, jo); // 이주람님 조상현님

const dog = {
  name: "콩이",
  age: 10,
  weight: 5,
};

//--------------------------------------------------

const printDogDesc = ({ name, age, weight }) => {
  // 파라미터(인자, 매개변수)에서도 구조분해할당이 가능하다
  // const {name, age, wight} = dog
  console.log(
    `우리집 강아지의 이름은 ${name}입니다. 그리고 나이는 ${age}살이구요 무게는 ${weight}입니다`
  );
};

printDogDesc(dog);

/*
update(id, date){
  console.log(id, data.title, data.content)
}

update(id, {title, content}){
  conosle.log(id, title, content)
}
*/
