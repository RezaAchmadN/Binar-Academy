const express = require('express');
const path = require('path')
const route = require('../route');

module.exports = async function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  // Route
  app.use(express.static("public"));
  app.use('/static', express.static(path.join(__dirname, '../uploads')))
  app.use('/api/', route());
};
