const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {
  fs.readFile('./Part4_Utilization/newyork.jpg', (err, data) => {
    response.writeHead(200, { 'Content-Type': 'image/jpeg'});
    response.end(data);
  });
});

server.listen(50001, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50001');
});

const server2 = http.createServer((request, response) => {
  fs.readFile('./Part4_Utilization/test.mp3', (err, data) => {
    response.writeHead(200, { 'Content-Type': 'audio/mp3'});
    response.end(data);
  });
});

server2.listen(50002, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50002');
});

//웹서버 종료
const testClose = function() {
  server.close();
  console.log('서버가 종료되었습니다, http://127.0.0.1:50001');
}

const testClose2 = function() {
  server2.close();
  console.log('서버가 종료되었습니다, http://127.0.0.1:50002');
}
//강제 서버 종료
setTimeout(testClose, 10000);
setTimeout(testClose2, 10000);
