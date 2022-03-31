import express from 'express';
import { router as movieRouter } from './movie/index.js';
import { router as reviewRouter } from './review/index.js';

const port = process.env.PORT || 8082;

const server = express();

server.use(express.json());

server.use('/movie', movieRouter);
server.use('/review', reviewRouter);

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});