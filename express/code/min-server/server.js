import fs from 'fs';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const respondJSON = (req, res) => {
  res.json({ text: 'Hello World', numbers: [1, 2, 3] });
};

const respondText = (req, res) => {
  res.end('Text');
};

const respond404 = (req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
};

const respondPost = (req, res) => {
  res.json({ status: 'ok' });
};

const respondStatic = (req, res) => {
  const filename = `${__dirname}/static/${req.params[0]}`;
  fs.createReadStream(filename)
    .on('error', () => respond404(req, res))
    .pipe(res);
};

const port = process.env.PORT || 8081;
const server = express();

server.get('/', respondText);
server.get('/json', respondJSON);
server.post('/post', respondPost);
server.get('/static/*', respondStatic);
server.use(respond404); // Must be last

server.listen(port);
console.log(`Server listening on port ${port}`);
