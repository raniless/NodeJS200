/*
 map(fn) : 배열에 있는 모든 Item에 map(fn)의 파라미터로 받은 함수를 적용시킨 배열을 return
*/

// define
const list = [1, 2, 3];

// process
const multipledList = list.map(item => item * 10);
multipledList.forEach(item => console.log(item));
