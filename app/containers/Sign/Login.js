import React from 'react';
import { Link } from 'react-router-dom';
import { LoginWrapper } from './Sign.style';

const Login = () => (
  <LoginWrapper>
    <div className="row">
      <div className="col-12 col-md-6">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group form-check text-center">
            <button type="submit" className="btn btn-dark p-3">
              Sign In
            </button>
            <a href="/">Forget password</a>
          </div>
        </form>
      </div>
      <div className="col-12 col-md-6 bg-light">
        <div className="p-4">
          <h3>New Customer?</h3>
          <span>Create an account with us and you'll be able to:</span>
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
);

export default Login;
