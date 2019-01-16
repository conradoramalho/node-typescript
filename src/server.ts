import express from 'express';
import config from './config';

const server = express();

server.get('/test', (_, res) => {
  res.send('Hello world!');
});

server.listen(config.port, () => {
  console.log(`[SERVER] Running at http://localhost:${config.port}`);
});
