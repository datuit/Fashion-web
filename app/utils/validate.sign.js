const Joi = require('joi');

export const userWarn = 'Password must be between 3-20 characters';
const passwordWarn = 'Password must be between 5-20 characters ';

export const username = Joi.string()
  .regex(/^[a-zA-Z0-9]{3,20}$/)
  .required()
  .options({
    language: {
      string: {
        regex: {
          base: userWarn,
        },
      },
    },
  });
export const password = Joi.string()
  .regex(/^[a-zA-Z0-9!@#$%^&*.]{3,20}$/)
  .required()
  .options({
    language: {
      string: {
        regex: {
          base: passwordWarn,
        },
      },
    },
  });

export const sign = Joi.object().keys({
  username,
  password,
});
