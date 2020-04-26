import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
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
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
              >
                whatsnew
              </a>
              <ion-icon name="caret-down-outline" />
              <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
              >
                dresses
              </a>
              <ion-icon name="caret-down-outline" />
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
              >
                women
              </a>
              <ion-icon name="caret-down-outline" />

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/men">
                  Action
                </a>
                <a className="dropdown-item" href="/men">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/men">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/men"
                id="navbarDropdown"
              >
                curve
              </a>
              <ion-icon name="caret-down-outline" />
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/men">
                  Action
                </a>
                <a className="dropdown-item" href="/men">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/men">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/men"
                id="navbarDropdown"
              >
                men
              </Link>
              <ion-icon name="caret-down-outline" />
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/men">
                  Action
                </a>
                <a className="dropdown-item" href="/men">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/men">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/men">
                kids
              </a>
              <ion-icon name="caret-down-outline" />
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/men">
                  Action
                </a>
                <a className="dropdown-item" href="/men">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/men">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/men">
                campaign
              </a>
              <ion-icon name="caret-down-outline" />
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/men">
                  Action
                </a>
                <a className="dropdown-item" href="/men">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/men">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/men">
                sale
              </a>
              <ion-icon name="caret-down-outline" />
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/men">
                  Action
                </a>
                <a className="dropdown-item" href="/men">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/men">
                  Something else here
                </a>
              </div>
            </li>
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
