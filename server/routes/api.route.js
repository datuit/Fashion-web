const express = require('express');
const Router = express.Router();
const { signup, signin } = require('../controllers/auth.controller');
const friend = require('../controllers/friend.controller');
const AuthMiddleWare = require('../middlewares/AuthMiddleware');
// const passport = require('passport');

Router.post('/user/signup', signup);
Router.post('/user/signin', signin);
Router.use(AuthMiddleWare.isAuth);
Router.get(
  '/friend',
  // passport.authenticate('jwt', { session: false }),
  friend.friendLists,
);
module.exports = Router;
