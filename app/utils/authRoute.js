import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = ({ authUser: { user } }) => ({
  isLogin: Boolean(user.userId),
});

const Protected = props => (
  <Route
    exact={props.exact}
    path={props.path}
    component={() =>
      props.isLogin ? (
        <Route exact={props.exact} path={props.path} {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const RouteAuth = props => (
  <Route
    exact={props.exact}
    path={props.path}
    component={() =>
      props.isLogin ? (
        <Redirect to="/" />
      ) : (
        <Route exact={props.exact} path={props.path} {...props} />
      )
    }
  />
);

// export const RouteWithSubRoute = (props) =>{
//   return
// }

export const RouteWithRouteAuth = withRouter(
  connect(mapStateToProps)(RouteAuth),
);
export const ProtectedRouter = withRouter(connect(mapStateToProps)(Protected));
