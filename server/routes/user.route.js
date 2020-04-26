const express = require('express');
const Router = express.Router();
const {
  register,
  login,
  // checklogin,
} = require('../controllers/users.controller');

Router.post('/register', register);
Router.post('/login', login);

module.exports = Router;
