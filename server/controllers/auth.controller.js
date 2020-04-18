const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const { prisma } = require('../config');
const { parserError } = require('../utils/helpers');
const { sign } = require('../validations/user');

module.exports.signup = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    await Joi.validate({ username, password }, sign);
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.users.create({
      data: {
        username,
        password: passwordHash,
        fullname: 'lethanhdat',
        email: 'lethanhdatdsad@gmail.com',
      },
    });
  } catch (error) {
    console.log(parserError(error));
  }
};

module.exports.signin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await prisma.users.findOne({
      where: {
        username,
      },
    });
    const isCompare = await bcrypt.compare(password, user.password);
    console.log(isCompare);
  } catch (error) {
    console.log(parserError(error));
  }
};
