/* eslint-disable no-console */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Joi = require('joi');
// const { jw } = require('../config');
const { parserError, generateToken, verifyToken } = require('../utils/helpers');
const { getDate, resUser } = require('../utils/generateData');
const { createUser, getUser } = require('../models/users.model');
const { createToken, findRefreshToken } = require('../models/tokens.model');
const { sign } = require('../validations/user');

const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || '1h';
const accessTokenSecret =
  process.env.ACCESS_TOKEN_SECRET || 'ledat98998@gmail.com';
const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE || '3650d';
const refreshTokenSecret =
  process.env.REFRESH_TOKEN_SECRET || 'ledat98998@gmail.com1';

const createTokenData = async user => {
  const accessToken = await generateToken(
    user,
    accessTokenSecret,
    accessTokenLife,
  );
  const refreshToken = await generateToken(
    user,
    refreshTokenSecret,
    refreshTokenLife,
  );
  const tokenData = {
    accessToken,
    refreshToken,
    userId: user.userId,
  };
  const token = await createToken(tokenData);
  return token;
};

const register = async (req, res) => {
  try {
    const { username, password, firstname, lastname, email } = req.body;
    const userData = await Joi.validate(
      { username, password, firstname, lastname, email },
      sign,
    );

    const passwordHash = await bcrypt.hash(userData.password, 10);
    userData.password = passwordHash;
    userData.registrationdate = getDate();
    const userDb = await createUser(userData);
    const user = resUser(userDb);
    const token = await createTokenData(user);

    return res.status(200).json({ token, user });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userDb = await getUser(username);
    const isCompare = await bcrypt.compare(password, userDb.password);
    if (isCompare) {
      const user = resUser(userDb);
      const token = await createTokenData(user);

      return res.status(200).json({ token, user });
    }
    return res.status(401).json({ msg: 'Password is incorrect' });
  } catch (error) {
    console.log(error);
  }
};

const refreshToken = async (req, res) => {
  const refreshTokenFromClient = req.body.refreshtoken;
  if (refreshTokenFromClient) {
    try {
      const decode = await verifyToken(
        refreshTokenFromClient,
        refreshTokenSecret,
      );
      const refreshTokenDb = await findRefreshToken(
        refreshTokenFromClient,
        decode.data.userId,
      );
      if (
        refreshTokenDb[refreshTokenDb.length - 1].refreshToken ===
        refreshTokenFromClient
      ) {
        const user = decode.data;
        const accessToken = await generateToken(
          user,
          accessTokenSecret,
          accessTokenLife,
        );
        return res.status(200).json({ accessToken, user });
      }
      return res.status(404).json({
        message: 'No refreshToken found',
      });
    } catch (error) {
      res.status(403).json({
        message: 'Invalid refresh token.',
      });
    }
  }
};

const checkToken = async (req, res) => {
  res.status(200).json({
    user: req.jwtDecode.data,
  });
};

module.exports = {
  register,
  login,
  refreshToken,
  checkToken,
};
