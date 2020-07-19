// curring : 화살표 함수 2번 사용하는 방법
const returnFunction = () => (a, b) => a + b;

const plus = returnFunction();

console.log(plus(10, 20));
