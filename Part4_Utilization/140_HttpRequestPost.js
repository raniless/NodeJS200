const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  if(request.method === 'GET') {
    fs.readFile('./Part4_Utilization/140_Example.html', (err, data) => {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(data);
      console.log(`${request.method} 방식의 요청입니다.`);
    });
  }
  else if(request.method === 'POST') {
    request.on('data', (data) => {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(data);
      console.log(`${request.method} 방식의 요청입니다.`);
    });
  }
});

server.listen(50000, () => {
  console.log('서버가 동작 중입니다, http://12.0.0.1:50000');
});

const closeServer = () => {
  server.close();
    console.log('서버가 종료되었습니다, http://127.0.0.1:50000');
};

setTimeout(closeServer, 10000);
