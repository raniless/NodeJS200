const promiseFirst = new Promise(resolve => resolve(1))
  .then(result => `${result + 10}`);

const promiseSecond = new Promise(resole => resole(1))
  .then(result => `${result + 20}`);

Promise.all([promiseFirst, promiseSecond]).then(result => {
  console.log('result :', result);
  console.log('sum:', Number(result[0]) + Number(result[1]));
});
