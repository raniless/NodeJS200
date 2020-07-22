/*
 - Promise : Callback 중첩을 좀 더 보기 쉽게 작성 할 수 있다
*/

const promiseFirst = new Promise(resolve => resolve(1))
  .then(result => `${result + 10}`);

const promiseSecond = new Promise(resole => resole(1))
  .then(result => `${result + 20}`);

Promise.all([promiseFirst, promiseSecond]).then(result => console.log(result));
