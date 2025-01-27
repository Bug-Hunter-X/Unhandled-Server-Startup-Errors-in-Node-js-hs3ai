const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running at http://localhost:8080');

//This code has a bug where it does not handle errors properly.  If there is an error during server start up, it won't show any error message.