import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withFormik } from 'formik';

import { Container, Spinner } from 'reactstrap';
import Breadcrumb from 'Components/Breadcrumb';

import { signUp } from 'Utils/validate.sign';
import { registerUser } from 'Redux/actions';

import { RegisterWrapper } from './Sign.style';

const Register = props => {
  const {
    errors,
    values,
    handleChange,
    registerUserAct,
    history,
    loading,
  } = props;
  const onSubmit = e => {
    e.preventDefault();
    console.log(values);
    signUp.isValid(values).then(valid => {
      if (valid) {
        registerUserAct(values, history);
      }
    });
  };
  return (
    <Container>
      <Breadcrumb title />
      <RegisterWrapper>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="form-group col-12 col-md-6">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                {errors.username}
              </small>
            </div>
            <div className="form-group col-12 col-md-6">
              <label htmlFor="email">Email address (*)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="form-control"
              />
              <small id="emailHelp" className="form-text text-muted">
                {errors.email}
              </small>
            </div>
            <div className="form-group col-12 col-md-6">
              <label htmlFor="password">Password (*)</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <small id="passwordHelp" className="form-text text-muted">
                {errors.password}
              </small>
            </div>
            <div className="form-group col-12 col-md-6">
              <label htmlFor="confirmpassword">Confirm Password (*)</label>
              <input
                type="password"
                className="form-control"
                id="confirmpassword"
                name="confirmpassword"
                value={values.confirmpassword}
                onChange={handleChange}
              />
              <small id="confirmpasswordHelp" className="form-text text-muted">
                {errors.confirmpassword}
              </small>
            </div>
            <div className="form-group col-12 col-md-6">
              <label htmlFor="firstname">First Name (*)</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
              />
              <small id="firstnameHelp" className="form-text text-muted">
                {errors.firstname}
              </small>
            </div>
            <div className="form-group col-12 col-md-6">
              <label htmlFor="lastname">Last Name (*)</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
              />
              <small id="lastnameHelp" className="form-text text-muted">
                {errors.lastname}
              </small>
            </div>
            <div className="form-group form-check text-center col-12 ">
              <button type="submit" className="btn btn-dark p-3">
                {loading ? <Spinner primary /> : 'Create Account'}
              </button>
            </div>
          </div>
        </form>
      </RegisterWrapper>
    </Container>
  );
};

Register.propTypes = {
  errors: PropTypes.object,
  values: PropTypes.object,
  loading: PropTypes.bool,
  handleChange: PropTypes.func,
  registerUserAct: PropTypes.func,
  history: PropTypes.object,
};
const FormikForm = withFormik({
  mapPropsToValues() {
    return {
      username: '',
      password: '',
      confirmpassword: '',
      firstname: '',
      email: '',
      lastname: '',
    };
  },
  validationSchema: signUp,
})(Register);

const mapStateToProps = ({ authUser }) => {
  const { loading } = authUser;
  return { loading };
};

export default connect(
  mapStateToProps,
  {
    registerUserAct: registerUser,
  },
)(FormikForm);
