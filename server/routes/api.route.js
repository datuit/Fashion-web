const express = require('express');
const Router = express.Router();
const friend = require('../controllers/friend.controller');
const AuthMiddleWare = require('../middlewares/AuthMiddleware');
const userRouter = require('./user.route');
const { checkToken, refreshToken } = require('../controllers/users.controller');
const { getProductList } = require('../models/products.model');
// const passport = require('passport');

Router.get('/', async (req, res) => {
  const list = await getProductList();
  res.send(list);
});

Router.use('/user', userRouter);

Router.post('/refreshtoken', refreshToken);

Router.use(AuthMiddleWare.isAuth);
Router.get(
  '/friend',
  // passport.authenticate('jwt', { session: false }),
  friend.friendLists,
);
Router.post('/checktoken', checkToken);
module.exports = Router;
