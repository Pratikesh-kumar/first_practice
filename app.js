const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req)
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>My name is Pratikesh</h1>');
});

const port = 4000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});