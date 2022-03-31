import fs from 'fs';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const respondJSON = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ text: 'Hello World', numbers: [1, 2, 3] }))
};

const respondText = (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end("Text")
};

const respond404 = (req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not Found')
};

const respondPost = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: 'ok' }));
}

const respondStatic = (req, res) => {
    const filename = `${__dirname}${req.url}`;
    if (!fs.existsSync(filename)) return respond404(req, res);
    fs.createReadStream(filename)
        .on('error', () => respond404(req, res))
        .pipe(res)
}

const port = process.env.PORT || 8081;
const server = createServer((req, res) => {
    if (req.url === '/') return respondText(req, res);
    if (req.url === '/json') return respondJSON(req, res);
    if (req.url === '/post' && req.method === 'POST') return respondPost(req, res);
    if (req.url.includes('/static')) return respondStatic(req, res);
    return respond404(req, res)
});

server.listen(port);
console.log(`Server listening on port ${port}`);