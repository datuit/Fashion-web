const jwtHelper = require('../utils/helpers');
const debug = console.log.bind(console);

const accessTokenSecret =
  process.env.ACCESS_TOKEN_SECRET || 'ledat98998@gmail.com';

const isAuth = async (req, res, next) => {
  const tokenFromClient =
    req.headers['x-access-token'] ||
    (req.body && req.body.access_token) ||
    (req.query && req.query.access_token);
  if (tokenFromClient) {
    try {
      const decode = await jwtHelper.verifyToken(
        tokenFromClient,
        accessTokenSecret,
      );
      req.jwtDecode = decode;

      next();
    } catch (error) {
      debug('Error While token :', error);
      return res.status(401).json({
        message: 'Unauthorized.',
      });
    }
  } else {
    return res.status(403).send({
      message: 'No token provided.',
    });
  }
};

module.exports = {
  isAuth,
};
