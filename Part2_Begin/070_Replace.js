const greeting = 'hello';
const dateString = '2017-08-24T11:00:00';
const smallBracket = '()';

// replace
const replaceGreeting = greeting.replace('el', '');
const replaceDateString = dateString.replace('T', ' ');
const middleBracket = smallBracket.replace('(', '{').replace(')', '}');

// print
console.log('el 없애기 : %s', replaceGreeting);
console.log('T를 공백으로 : %s', replaceDateString);
console.log('() => {} : %s', middleBracket);
