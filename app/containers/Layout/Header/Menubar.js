import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { MenubarWrapper } from './styles';

const Menubar = ({ isTogleSider }) => {
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
                href="#"
                id="navbarDropdown"
              >
                women
              </a>
              <ion-icon name="caret-down-outline" />

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
              >
                curve
              </a>
              <ion-icon name="caret-down-outline" />
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
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
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">
                kids
              </a>
              <ion-icon name="caret-down-outline" />
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">
                campaign
              </a>
              <ion-icon name="caret-down-outline" />
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">
                sale
              </a>
              <ion-icon name="caret-down-outline" />
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
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
          </ul>
        </div>
      </nav>
    </MenubarWrapper>
  );
};

export default Menubar;
