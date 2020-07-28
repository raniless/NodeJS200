/*
 - JSON.parse(data) : JSON String 객체를 자바스크립트 오브젝트로 변환하는 기능(<-> JSON.stringify(data))
*/

const fs = require('fs');
fs.readFile('./Part4_Utilization/list.json', (err, data) => {
  if(err) throw err;
  const json = JSON.parse(data.toString());
  json.forEach(student => console.log('name :', student.name));
});
