import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
//import { LOGIN_SUCCESS } from "../../actions/types";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { email, password } = formData;

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  //redirect if logged in
  if (isAuthenticated) {
    return <Navigate to="/vehicles" />;
  }

  return (
    <Fragment>
      <h1 className="text-center text-2xl mb-8">Sign Into Account</h1>
      <form className="max-w-md mx-auto" onSubmit={e => onSubmit(e)}>
        <div className="">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        <div className="mx-auto mt-8 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100 text-center w-40">
          <input type="submit" value="Login" />
        </div>
      </form>
      <p className="text-center py-2 text-gray-500">
        Do you not have an account? <span className="text-red-500"><Link to="/register">Sign Up</Link></span>
      </p>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
