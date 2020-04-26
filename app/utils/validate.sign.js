import * as Yup from 'yup';

const username = Yup.string()
  .required('Require')
  .trim()
  .min(5, 'Username must have min 5 characters')
  .max(12, 'Username have max 12 characters')
  .matches(/^[a-zA-Z0-9]+$/, 'Do not use special characters');

const password = Yup.string()
  .required('Require')
  .trim()
  .min(5, 'Username must have min 5 characters')
  .max(12, 'Username have max 10 characters')
  .matches(
    /^[a-zA-Z0-9!@#$%^&*.]+$/,
    'Use only letters, numbers and characters "! @ # $% ^ & *."',
  );

export const signIn = Yup.object().shape({
  username,
  password,
});
