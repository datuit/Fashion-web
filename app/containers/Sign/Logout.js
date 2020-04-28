import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import { logoutUser } from 'Redux/actions';

const Logout = props => {
  const { logoutUserAct, history } = props;

  useEffect(() => {
    logoutUserAct(history);
  }, []);
  return <Fragment />;
};

export default connect(
  null,
  { logoutUserAct: logoutUser },
)(Logout);
