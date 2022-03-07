import database from './config/db';

const express = require('express');

const router = express.Router();
const app = express();

database();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

require('./route')(router);

router.get('/', (req, res, next) => {
  return res.send({
    status: 'success',
    message: 'Welcome to test',
  });
});

export default app;
