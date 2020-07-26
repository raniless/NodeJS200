/*
fs.appendFile(file, data[, options], callback)
 -> v7.0.0 이후로 callback 필수
*/

const fs = require('fs');
const path = './Part4_Utilization/chapters.txt';

const list = [1, 2, 3, 4, 5];
list.forEach(item => fs.appendFile(path, `chapter ${item}\n`, (err) => {
  console.log(`File Append Success ${item}`);
}));
