const express = require('express');
const loader = require('./loader');

const PORT = 3001;

function logMessage () {
  return () => console.log(`[${new Date()}]`, `Server run on ${PORT}`);
}

function runServer () {
  const app = express();
  loader(app)
    .then((server) => server.listen(PORT, logMessage()))
    .catch((err) => console.error(err));
}

runServer();
