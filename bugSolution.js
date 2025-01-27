const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
}).on('error', (err) => {
  console.error('Failed to start server:', err);
});
//This code adds an error handler to the server.listen method.  If there is an error during server startup, it will log the error to the console.