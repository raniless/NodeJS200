const string = '<h1>특별가 - </h1><h2>99,000원</h2>';
// <..> : <로 시작하고 .한글자.두글자 >로 끝나는 식
const result1 = string.replace(/<..>/g, '');  //<h1>, <h2> 선택됨
// < 뒤에 세글자
const result2 = string.replace(/<.../g, '');  //<h1>, </h1, <h2>, </h2 선택됨

console.log('result1:', result1);
console.log('result2:', result2);
