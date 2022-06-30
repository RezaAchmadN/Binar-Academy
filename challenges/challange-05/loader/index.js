const http = require('http');
const express = require('./express');
const mongoose = require('./mongoose');

module.exports = async (app) => {
  try {
    // mongoose loader
    await mongoose();

    // express loader
    await express(app);

    const server = http.createServer(app);

    return Promise.resolve(server);
  } catch (err) {
    return Promise.reject(err);
  }
};
