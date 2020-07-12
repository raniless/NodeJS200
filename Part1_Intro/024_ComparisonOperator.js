/*
 - == : 값만 비교
 - === : 값과 형식 모두 비교
*/
const a = 5;
const b = 6;

if(a == 5) {
  console.log(a == 5);
  console.log(a == b);
  console.log(a == '5');
}

console.log('------------------------');


if(a === 5) {
  console.log(a === 5);
  console.log(a === b);
  console.log(a === '5');
}

console.log('------------------------');

if(a > b) {
  console.log(a > b);
}

if(a < b) {
  console.log(a < b);
}

console.log('------------------------');

if(a >= 5) {
  console.log(a >= 5);
  console.log(a >= b);
}

console.log('------------------------');

if(a <= 5) {
  console.log(a <= 5);
  console.log(a <= b);
}
