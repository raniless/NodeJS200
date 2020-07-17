const string = '(<h1>:::특별가 - 99,000원:::</h1>)';

//[] : 대괄호 안쪽에 넣은 문자들을 모두 찾아서 바꾸는 예제
const replacedBracket = string.replace(/[()]/g, '');  // '(', ')' 없애기
const replacedBracketOrSlashHyphenComma = string.replace(/[()/\-,]/g, '');  // '(', ')', '-' 없애기

console.log('바꾸기 전 ---->:', string);
console.log('() 없애기 ---->:', replacedBracket);
console.log('/- 없애기 ---->:', replacedBracketOrSlashHyphenComma);
