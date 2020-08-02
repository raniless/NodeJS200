const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
  // let pathname = url.parse(request.url);
  let pathname = url.parse(request.url).pathname;
  if(pathname == '/') {
    fs.readFile('./Part4_Utilization/138_index.html', (err, data) => {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(data);
      console.log(url.parse(request.url));
    });
  }
  else if(pathname === '/example') {
    fs.readFile('./Part4_Utilization/136_Example.html', (err, data) => {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(data);
      console.log(url.parse(request.url));
    });
  }
});

server.listen(50000, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});

const closeServer = () => {
  server.close();
    console.log('서버가 종료되었습니다, http://127.0.0.1:50000');
};

setTimeout(closeServer, 10000);
