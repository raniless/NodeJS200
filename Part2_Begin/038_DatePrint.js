const date = new Date(2017, 8, 3, 18, 20, 30);
console.log('date : %s', date.toLocaleString());
console.log('LocaleDateString : %s', date.toLocaleDateString());  //2017-9-3
console.log('LocaleTimeString : %s', date.toLocaleTimeString());  //6:20:20 PM

console.log('year : %s', date.getFullYear());
console.log('month : %s', date.getMonth() + 1);
console.log('date : %s', date.getDate());
console.log('hours : %s', date.getHours());
console.log('minutes : %s', date.getMinutes());
console.log('seconds : %s', date.getSeconds());