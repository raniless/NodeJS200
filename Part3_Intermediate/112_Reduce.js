/*
 - reduce() : 해당 배열의 가장 첫 번째 인덱스부터 마지막 인덱스까지의 값에 대한 누적 계산 return
*/

const scores = [10, 20, 30, 40, 50];

//(10,20) => ((10+20),30) => ((10+20+30),40) => return 10+20+30+40
const sum = scores.reduce((a, b) => (a + b));

//(10,10) => ((10+10),20) => ((10+10+20),30) => ((10+10+20+30),40) => return 10(초기값)+10+20+30+40
const sumWithInitValue = scores.reduce((a, b) => (a + b), 10);  //10 : 초기값

console.log('sum :', sum);
console.log('sumWithInitValue :', sumWithInitValue);
