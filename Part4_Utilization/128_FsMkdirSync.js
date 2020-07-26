const fs = require('fs');

const dirName = `${__dirname}/img`; //__dirname : 현재소스 위치 절대경로

if(!fs.existsSync(dirName)) {
  fs.mkdirSync(dirName)
}
