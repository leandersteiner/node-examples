import { createServer } from 'http';

const port = process.env.PORT || 8081;
const server = createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ text: 'Hello World', numbers: [1, 2, 3] }));
});

server.listen(port);
console.log(`Server listening on port ${port}`);
