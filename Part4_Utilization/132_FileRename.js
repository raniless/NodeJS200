/*
 - fs.rename(fromFilePathName, toFilePathName, err) : File명 변경
*/
const fs = require('fs');

const renameFile = (fromFilePathName, toFilePathName) => {
  fs.rename(fromFilePathName, toFilePathName, err => {
    if(err) console.log(`ERROR: ${err}`);
  });
};

const fromFilePathName = './Part4_Utilization/hello.txt';
const toFilePathName = './Part4_Utilization/bye.txt';

renameFile(fromFilePathName, toFilePathName);
