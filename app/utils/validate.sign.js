import * as Yup from 'yup';

const username = Yup.string()
  .required('Require')
  .trim()
  .min(5, 'Username must have min 5 characters')
  .max(12, 'Username have max 12 characters')
  .matches(/^[a-zA-Z0-9]+$/, 'Do not use special characters');

const firstname = Yup.string().required('Require');

const lastname = Yup.string().required('Require');

const email = Yup.string().email('Please enter the correct email format');

const password = Yup.string()
  .required('Require')
  .trim()
  .min(5, 'Password must have min 5 characters')
  .max(12, 'Passowrd have max 10 characters')
  .matches(
    /^[a-zA-Z0-9!@#$%^&*.]+$/,
    'Use only letters, numbers and characters "! @ # $% ^ & *."',
  );

const confirmpassword = Yup.string().oneOf(
  [Yup.ref('password'), null],
  'Passwords must match',
);

export const signUp = Yup.object().shape({
  username,
  password,
  confirmpassword,
  firstname,
  email,
  lastname,
});

export const signIn = Yup.object().shape({
  username,
  password,
});
