import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import { Container, Spinner, Button } from 'reactstrap';

import Breadcrumb from 'Components/Breadcrumb';

import { signIn } from 'Utils/validate.sign';
import { loginUser } from 'Redux/actions';
import { LoginWrapper } from './Sign.style';

const Login = props => {
  const {
    errors,
    values,
    handleChange,
    loginUserAct,
    history,
    loading,
  } = props;
  const onSubmit = e => {
    e.preventDefault();
    signIn.isValid(values).then(valid => {
      if (valid) {
        loginUserAct(values, history);
      }
    });
  };
  return (
    <Container>
      <Breadcrumb title />
      <LoginWrapper>
        <div className="row">
          <div className="col-12 col-md-6">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputUserName">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputUserName"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
                <small id="usernameHelp" className="form-text text-muted">
                  {errors.username}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <small id="passwordHelp" className="form-text text-muted">
                  {errors.password}
                </small>
              </div>
              <div className="form-group form-check text-center">
                <Button
                  type="submit"
                  className="btn btn-dark p-3"
                  disabled={loading}
                >
                  {loading ? <Spinner primary /> : 'Login'}
                </Button>
                <a href="/">Forget password</a>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-6 bg-light">
            <div className="p-4">
              <h3>New Customer?</h3>
              <span>
                Create an account with us and you&apos;ll be able to :
              </span>
              <ul className="list">
                <li>Check out faster</li>
                <li>Save multiple shipping addresses</li>
                <li>Access your order history</li>
                <li>Track new orders</li>
                <li>Save items to your wish list</li>
              </ul>
              <Link className="btn btn-dark p-3" to="/register">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </LoginWrapper>
    </Container>
  );
};

Login.propTypes = {
  errors: PropTypes.object,
  values: PropTypes.object,
  loading: PropTypes.bool,
  handleChange: PropTypes.func,
  loginUserAct: PropTypes.func,
  history: PropTypes.object,
};

const FormikForm = withFormik({
  mapPropsToValues() {
    return {
      username: '',
      password: '',
    };
  },
  validationSchema: signIn,
})(Login);

const mapStateToProps = ({ authUser }) => {
  const { loading } = authUser;
  return { loading };
};

export default connect(
  mapStateToProps,
  {
    loginUserAct: loginUser,
  },
)(FormikForm);
