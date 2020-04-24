import React from 'react';
import { RegisterWrapper } from './Sign.style';

const Register = () => (
  <RegisterWrapper>
    <form>
      <div className="row">
        <div className="form-group col-12 col-md-6">
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
        <div className="form-group col-12 col-md-6">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group col-12 col-md-6">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group col-12 col-md-6">
          <label htmlFor="exampleInputPassword1">First Name</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group col-12 col-md-6">
          <label htmlFor="exampleInputPassword1">Last Name</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group col-12 col-md-6">
          <label htmlFor="exampleInputPassword1">Company Name</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group form-check text-center col-12 ">
          <button type="submit" className="btn btn-dark p-3">
            Create Account
          </button>
        </div>
      </div>
    </form>
  </RegisterWrapper>
);

export default Register;
