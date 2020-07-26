const testFolder = './Part4_Utilization';
const fs = require('fs');

const fineLnameList = fs.readdirSync(testFolder);

fineLnameList.forEach((fileName) => {
  console.log(fileName);
});
