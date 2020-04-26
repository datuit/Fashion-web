const prisma = require('../config/prisma');

const createToken = async tokenData => {
  const { accessToken, refreshToken, userId } = tokenData;
  const token = await prisma.tokens.create({
    data: {
      accessToken,
      refreshToken,
      users: {
        connect: {
          userId: userId,
        },
      },
    },
  });
  return token;
};

const findRefreshToken = async (refreshToken, userId) => {
  const token = await prisma.users
    .findOne({
      where: {
        userId,
      },
    })
    .tokens({
      where: {
        refreshToken,
      },
    });
  return token;
};

module.exports = {
  createToken,
  findRefreshToken,
};
