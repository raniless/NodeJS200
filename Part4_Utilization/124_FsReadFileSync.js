const fs = require('fs');

const data = fs.readFileSync('./Part4_Utilization/message.txt');
// const data = fs.readFile('./Part4_Utilization/message.txt', (err, data) => {
//   if (err) throw err;
//   console.log("ddddddddddddd");
//   console.log(data);
// });

const string = data.toString();
// const string = data;
console.log('sync work01');
console.log(string);
