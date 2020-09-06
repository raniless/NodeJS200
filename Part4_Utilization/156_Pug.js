const pug = require('pug');
const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {
  fs.readFile('./Part4_Utilization/156_pug_example.pug', 'utf-8', (error, data) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    //compile : pug 문자열을 HTML 문자열로 변경할 수 있는 함수 생성
    const fn = pug.compile(data);
    response.end(fn());
  });
});

server.listen(50000, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});

//웹서버 종료
const closeServer = function() {
  server.close();
  console.log('서버가 종료되었습니다, http://127.0.0.1:50000');
};

setTimeout(closeServer, 10000);
