// /<정규표현식>/g -> 해당 부분 찾을 수 있음.

const string = '<h1>:::특별가 - 99,000원:::</h1>';
const result1 = string.replace(/<h1>/g, '');
console.log('result1:', result1);

// \:esacpe
const result2 = string.replace(/<h1>/g, '').replace(/<\/h1>/g, '');
console.log('result2:', result2);
