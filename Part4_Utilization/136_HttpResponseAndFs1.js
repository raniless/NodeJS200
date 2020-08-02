const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {
  fs.readFile('./Part4_Utilization/136_Example.html', (err, data) => {
    response.writeHead(200, { 'Content-Type': 'text/html'});
    response.end(data);
  });
});

server.listen(50000, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});

//웹서버 종료
const testClose = function() {
  server.close();
  console.log('서버가 종료되었습니다, http://127.0.0.1:50000');
}

//강제 서버 종료
setTimeout(testClose, 10000);
