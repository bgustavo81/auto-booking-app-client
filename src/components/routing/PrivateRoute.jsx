import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// const PrivateRoute = ({
//   component: Component,
//   auth: { isAuthenticated, loading },
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     render={props =>
//       !isAuthenticated && !loading ? (
//         <Navigate to='/login' />
//       ) : (
//         <Component {...props} />
//       )
//     }
//   />
// );

const PrivateRoute = ({
  auth: {isAuthenticated, loading}
}) => {
  return isAuthenticated && !loading ? <Outlet /> : <Navigate to ="/login" />
}

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);