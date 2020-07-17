//setInterval(fn, milsec);

//1초에 1번씩 'hello' 출력
setInterval(() => console.log('hello'), 1000);

//2초에 1번씩 bye 출력하기
const printBye = () => console.log('bye');
setInterval(printBye, 2000);
