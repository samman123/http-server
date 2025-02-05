const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Determine the file path based on the URL
  let filePath = './public' + req.url;

  // If the request is for the root, serve index.html
  if (filePath === './public/') {
    filePath = './public/index.html';
  }

  // Get the file extension to determine the content type
  const extname = path.extname(filePath);
  let contentType = 'text/html'; // Default content type

  switch (extname) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'application/javascript';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
    case '.jpeg':
      contentType = 'image/jpeg';
      break;
    case '.gif':
      contentType = 'image/gif';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    // Add more content types as needed
  }

  // Read and serve the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
