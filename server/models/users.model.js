const prisma = require('../config/prisma');

const createUser = async ({ username, passwordHash }) => {
  const user = await prisma.users.create({
    data: {
      username,
      password: passwordHash,
      email: 'lethanhdat@gmail.com',
      fullname: 'Le THanh Dat',
    },
  });
  return user;
};

const getUser = async ({ username }) => {
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
