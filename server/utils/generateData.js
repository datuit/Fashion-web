const moment = require('moment');

module.exports.getDate = () => {
  const currentDate = new Date();

  // const date = currentDate.getDate();
  // const month = currentDate.getMonth() + 1; //Be careful! January is 0 not 1
  // const year = currentDate.getFullYear();

  // const dateString = month + '/' + date + '/' + year;
  // const result = moment(dateString, 'MM/DD/YYYY').unix();
  return currentDate;
};

module.exports.resUser = user => ({
  userId: user.userId,
  username: user.username,
  firstname: user.firstname,
  lastname: user.lastname,
  email: user.email,
});
