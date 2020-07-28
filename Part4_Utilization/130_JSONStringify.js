/*
 - JSON.stringify(val, callback) : JSON 오브젝트를 문자열(String)으로 변환
*/

const fs = require('fs');
const userList = [
  {name: 'kyeongrok', age:31},
  {name: 'jihyun', age:31}
];

//userList 자체를 write하게 되면 '[object Object],[object Object]' 로 write
fs.writeFile('./Part4_Utilization/list.json', JSON.stringify(userList), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
