const Joi = require('joi');

const userMess = 'The account must be between 3-20 characters';
const passwordMess = 'Password must be between 5-20 characters ';
const fistLastNameMess = 'Require to be from 3 to 20 characters';
const emailMess = 'Please enter the correct email format';

const username = Joi.string()
  .regex(/^[a-zA-Z0-9]{3,12}$/)
  .required()
  .options({
    language: {
      string: {
        regex: {
          base: userMess,
        },
      },
    },
  });

const password = Joi.string()
  .regex(/^[a-zA-Z0-9!@#$%^&*.]{3,20}$/)
  .required()
  .options({
    language: {
      string: {
        regex: {
          base: passwordMess,
        },
      },
    },
  });

const firstname = Joi.string()
  .required()
  .options({
    language: {
      string: {
        regex: {
          base: fistLastNameMess,
        },
      },
    },
  });

const lastname = Joi.string()
  .required()
  .options({
    language: {
      string: {
        regex: {
          base: fistLastNameMess,
        },
      },
    },
  });

const email = Joi.string()
  .email()
  .max(256)
  .required()
  .options({
    language: {
      string: {
        regex: {
          base: emailMess,
        },
      },
    },
  });

module.exports.username = username;
module.exports.password = password;
module.exports.firstname = firstname;
module.exports.lastname = lastname;
module.exports.email = email;

module.exports.sign = Joi.object().keys({
  username,
  password,
  firstname,
  lastname,
  email,
});
