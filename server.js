const http = require('http');

const server = http.createServer((req, res) => {
  // Get the URL from the request
  const url = req.url;

  // Set the content type to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Check the URL and send the appropriate response
  if (url === '/home') {
    res.end('Welcome home');
  } else if (url === '/about') {
    res.end('Welcome to About Us page');
  } else if (url === '/node') {
    res.end('Welcome to my Node.js project');
  } else {
    // For any other URL, return a 404 Not Found response
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
