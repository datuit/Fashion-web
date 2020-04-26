const prisma = require('../config/prisma');

const createUser = async userData => {
  const user = await prisma.users.create({
    data: userData,
  });
  return user;
};

const getUser = async username => {
  const user = await prisma.users.findOne({
    where: {
      username,
    },
  });
  return user;
};

module.exports = {
  createUser,
  getUser,
};
