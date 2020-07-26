const fs = require('fs');

const path = './Part4_Utilization/message.txt';
fs.readFile(path, (err, data) => {
  if(err) throw err;
  let contents = data.toString();
  contents = 'replaced';
  fs.writeFile(path, contents, (err) => {
    if(err) throw err;
    console.log('The file has been saved!');
  });
});
