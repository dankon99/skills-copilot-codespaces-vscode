// Create web server
// Create a web server that listens on port 3000 and outputs a message when it is running.

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Web server is running!');
});

server.listen(3000);