/*
 - response.writeHead(statusCode[, statusMessage][, headers]) : 등답헤더 작성
 - response.end([data[, encoding]][, callback]) : 응답 본문 작성
*/
const http = require('http');
const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('Hello World!');
});

server.listen(50000, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});
