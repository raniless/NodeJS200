//match : 원하는 패턴으로 문자열 추출
const text = 'hello my name is kyeongrok';
const matched = text.match(/[a-l]{1,3}/g);  //a~l까지 1~3개 문자열을 추출하는 정규 표현식

console.log(matched);
