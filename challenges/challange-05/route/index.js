const { Router } = require('express');
const { carRoute } = require('./car');

module.exports = () => {
  const route = Router();

  route.get('/ping', (_req, res) => {
    res.send('test only');
  });

  carRoute(route);

  return route;
};
