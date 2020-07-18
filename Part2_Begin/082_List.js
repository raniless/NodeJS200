const studentList = [
  {name: 'kyeongrok', age: 31, score: 85},
  {name: 'jihyun', age: 31, score: 95},
  {name: 'minsup', age: 35, score: 76},
];

console.log(studentList[0]);

const student1 = {name:'yuna', age:26, score:85};
studentList.push(student1); //push : 마지막 행으로 항목 추가
console.log(studentList);

studentList.pop();  //마지막으로 넣은 항목 꺼냄
console.log(studentList);
