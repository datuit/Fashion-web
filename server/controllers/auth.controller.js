/* eslint-disable no-console */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Joi = require('joi');
// const { jw } = require('../config');
const { parserError, generateToken, verifyToken } = require('../utils/helpers');
const { createUser, getUser } = require('../models/users.model');
const { sign } = require('../validations/user');

const tokenList = {};
const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || '1h';
const accessTokenSecret =
  process.env.ACCESS_TOKEN_SECRET || 'ledat98998@gmail.com';
const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE || '3650d';
const refreshTokenSecret =
  process.env.REFRESH_TOKEN_SECRET || 'ledat98998@gmail.com1';

const signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    await Joi.validate({ username, password }, sign);
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await createUser({ username, passwordHash });
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

    tokenList[refreshToken] = { accessToken, refreshToken };

    console.log(`Gửi Token và Refresh Token về cho client...`);
    return res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    console.log(parserError(error));
  }
};

const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await getUser({ username });
    const isCompare = await bcrypt.compare(password, user.password);
    if (isCompare) {
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

      tokenList[refreshToken] = { accessToken, refreshToken };
    } else {
      res.status(401).json({ msg: 'Password is incorrect' });
    }
  } catch (error) {
    console.log(parserError(error));
  }
};

const refreshToken = async (req, res) => {
  const refreshTokenFromClient = req.body.refreshToken;

  if (refreshTokenFromClient && tokenList[refreshToken]) {
    try {
      const decode = await verifyToken(
        refreshTokenFromClient,
        refreshTokenSecret,
      );
      const user = decode.data;
      const accessToken = await generateToken(
        user,
        accessTokenSecret,
        accessTokenLife,
      );
      return res.status(200).json({ accessToken });
    } catch (error) {
      res.status(403).json({
        message: 'Invalid refresh token.',
      });
    }
  } else {
    return res.status(403).send({
      message: 'No token provided.',
    });
  }
};

module.exports = {
  signin,
  signup,
  refreshToken,
};
