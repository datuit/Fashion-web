import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import routes from 'Utils/routes';
import { MenubarWrapper } from './styles';

const Menubar = props => {
  const { isTogleSider, isLogin } = props;
  return (
    <MenubarWrapper>
      <nav className="navbar navbar-expand-md navbar-light">
        <div
          className={classnames('navbar-collapse collapse show', {
            active: isTogleSider,
          })}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            {routes.map(route => (
              <li className="nav-item dropdown" key={route.category}>
                <Link
                  className="nav-link dropdown-toggle"
                  to="/men"
                  id="navbarDropdown"
                >
                  {route.category}
                </Link>
                <ion-icon name="caret-down-outline" />
                <div
                  className="dropdown-menu "
                  aria-labelledby="navbarDropdown"
                >
                  <Link className="dropdown-item" to={`/${route.category}`}>
                    Action
                  </Link>
                  <Link className="dropdown-item" to={`/${route.category}`}>
                    Another action
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to={`/${route.category}`}>
                    Something else here
                  </Link>
                </div>
              </li>
            ))}
            {isLogin ? (
              <li className="nav-item dropdown d-block d-md-none">
                <div className="dropdown-menu">
                  <div className="dropdown-item">Hi</div>
                </div>
              </li>
            ) : (
              <Fragment>
                <li className="nav-item dropdown d-block d-md-none">
                  <Link className="nav-link dropdown-toggle h5" to="/login">
                    Sign In
                  </Link>
                </li>

                <li className="nav-item dropdown d-block d-md-none">
                  <span className="nav-link dropdown-toggle">Or</span>
                </li>
                <li className="nav-item dropdown d-block d-md-none">
                  <Link className="nav-link dropdown-toggle h5" to="/register">
                    Register
                  </Link>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </nav>
    </MenubarWrapper>
  );
};

Menubar.propTypes = {
  isLogin: PropTypes.bool,
  isTogleSider: PropTypes.bool,
};

export default Menubar;
