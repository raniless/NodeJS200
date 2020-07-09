let fruit = 'apple';
console.log('fruit:', fruit);

fruit = 'grape';
console.log('fruit:', fruit);

/*
 var - let 차이?
  - var : 같으 이름의 변수를 여러 번 선언하는 것을 허용
  - let : 같은 이름의 변수에 let을 붙여 다시 선언하면 에러 발생
*/

var variable1 = 'hello';
var variable1 = 'bye';
console.log(variable1);

let variable2 = 'hello';
let variable2 = 'bye';
console.log(variable2);
