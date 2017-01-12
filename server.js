import config from './config';
import apiRouter from './api';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

const server = express();
server.use(bodyParser.json());

// Pug View Engine
server.set('view engine', 'jade');

// Index.jade
server.get('/', (req, res) => {
  res.render('index', {title:"React Environment"});
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
