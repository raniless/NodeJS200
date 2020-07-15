// 함수의 유효 범위(Scope) 및 익명함수

// 전역변수
let resultSubstration;
function substration(a, b) {
  resultSubstration = a - b;
}

substration(100, 50);
console.log(resultSubstration);

// 변수에 익명함수 형태로 함수를 정의할 수 있음
function multiple(a, b) {
  const result = a * b;
  return result;
}

const r = multiple(10, 10);
console.log(r);

// 지역 변수
function sum(a, b) {
  const resultSum = a + b;
}

sum(20, 30);
console.log(resultSum);
