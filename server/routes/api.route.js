const express = require('express');
const Router = express.Router();
const { prisma, connection } = require('../config');
const { signup, signin } = require('../controllers/auth.controller');

Router.post('/user/signup', signup);
Router.post('/user/signin', signin);

module.exports = Router;
