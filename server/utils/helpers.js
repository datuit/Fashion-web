const jwt = require('jsonwebtoken');

const parserError = err => {
  if (err.isJoi) return err.details[0];
  return JSON.stringify(err, Object.getOwnPropertyNames(err));
};

const generateToken = (user, secretSignature, tokenLife) =>
  new Promise((resolve, reject) => {
    jwt.sign(
      { data: user },
      secretSignature,
      { expiresIn: tokenLife },
      (error, token) => {
        if (error) {
          return reject(err);
        }
        return resolve(token);
      },
    );
  });

const verifyToken = (token, secretSignature) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, secretSignature, (error, decode) => {
      if (error) {
        return reject(error);
      }
      return resolve(decode);
    });
  });

module.exports = {
  parserError,
  verifyToken,
  generateToken,
};
