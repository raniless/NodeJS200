const pug = require('pug');
const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {
  fs.readFile('./Part4_Utilization/158_pug_example3.pug', 'utf-8', (error, data) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    const fn = pug.compile(data);
    response.end(fn({
      table_name : 'Multiplication table 19 X ?',
      number : '19',
    }));
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
