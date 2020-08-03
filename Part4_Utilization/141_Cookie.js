const http = require('http');

const server = http.createServer((request, response) => {
  //cookie
  response.writeHead(200, {
    'Content-Type': 'text/html',
    'Set-Cookie': ['soju = grilledPork', 'beer = chicken'],
  });

  //cookie output
  response.end(`<h1>${request.headers.cookie}</h1>`);
});

server.listen(50000, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});

const closeServer = () => {
  server.close();
  console.log('서버가 종료되었습니다, http://127.0.0.1:50002');
};

setTimeout(closeServer, 10000);
