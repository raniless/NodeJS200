const students = [
  {name:'kyeongrok', age:31, score:85},
  {name:'jihyun', age:31, score:95},
  {name:'minsup', age:35, score:76},
  {name:'dasom', age:24, score:84},
  {name:'yuna', age:26, score:54},
  {name:'mattheue', age:29, score:34}
];

// 21 이상 30 미만 점수 평균 구하기
const between21to30StudentsAverage = students
  .filter(student => student.age >= 21 && student.age < 30)
  .map(student => student.score)
  .reduce((previous, current, index, array) => previous + (current/array.length), 0);
/*
arr.reduce((accumulator, currentValue[, currentIndex, array]) => callback[, initialValue])

callback
 - 배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 받습니다.
accumulator
 - 누산기accmulator는 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값입니다.
currentValue
 - 처리할 현재 요소.
currentIndex(Optional)
 - 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작합니다.
array(Optional)
 - reduce()를 호출한 배열.
initialValue(Optional)
 - callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다.
   빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다.
*/

console.log('average :', between21to30StudentsAverage);
