/*
fs.writeFile(file, data[, options], callback)
 -> v7.0.0 이후로 callback 필수
*/

const fs = require('fs');

const contents = 'hello\nbye\n안녕';
fs.writeFile('./Part4_Utilization/message.txt', contents, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');});
