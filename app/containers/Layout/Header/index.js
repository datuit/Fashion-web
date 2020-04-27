import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import logo from 'Images/alogo.png';
import ImgLoadding from 'Components/ImgLoading';
import Menubar from './Menubar';
import HeaderWrapper from './styles';

function Header(props) {
  const { isLogin, user, cartLength } = props;

  const [isTogleSider, setIsTogleSider] = useState(false);
  const [isTogleFormSearch, setIsTogleFormSearch] = useState(false);

  const onTogleSider = () => setIsTogleSider(!isTogleSider);
  const onTogleFormSearch = () => setIsTogleFormSearch(!isTogleFormSearch);
  const tagAs = document.querySelectorAll('#header a');
  tagAs.forEach(a =>
    a.addEventListener('click', () => {
      if (isTogleSider) {
        onTogleSider();
      }
    }),
  );
  return (
    <HeaderWrapper id="header">
      <section>
        <div className="container-fluid">
          <div className="top-nav position-relative">
            <div className="row">
              <div className="col-4">
                <div className="top-nav-phone d-none d-md-block">
                  FREE SHIPPING ON ALL ORDERS OVER $300
                </div>
                <div
                  className={classnames(
                    'top-nav-mobie-togle d-block d-md-none',
                    { active: isTogleSider },
                  )}
                >
                  <div
                    role="button"
                    aria-hidden
                    className="d-inline-block"
                    onClick={onTogleSider}
                  >
                    <span> </span>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="top-nav-logo text-center">
                  <Link to="/" className="logo d-inline-block">
                    <ImgLoadding src={logo} alt="2" />
                  </Link>
                </div>
              </div>
              <div className="col-4">
                <div className="top-nav-right float-right">
                  <ul className="none">
                    <li className="d-none d-md-inline-block">
                      <form>
                        <label className="h4" htmlFor="forSearchDesktop">
                          <ion-icon name="search-outline" />
                        </label>
                        <input
                          className="search-desktop"
                          id="forSearchDesktop"
                          type="text"
                        />
                      </form>
                    </li>
                    <li className="d-inline-block d-md-none">
                      <form>
                        <div
                          className="btn"
                          aria-hidden
                          role="button"
                          onClick={onTogleFormSearch}
                        >
                          <ion-icon name="search-outline" />
                        </div>
                        <input className="d-none d-md-inline" type="text" />
                      </form>
                    </li>
                    <li className="d-none d-md-inline-block">
                      {isLogin ? (
                        <Link to="/account">Hi, {user.lastname}</Link>
                      ) : (
                        <Link to="/login">
                          <ion-icon name="person-circle-outline" />
                          <span>Sign In</span>
                        </Link>
                      )}
                    </li>
                    <li>
                      <Link to="/cart">
                        <div className="d-inline-block mr-md-4">
                          <ion-icon name="cart-outline" />
                          <span className="card-count">{cartLength}</span>
                        </div>
                        <span className="d-none d-md-inline">view card</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={classnames('col-12 d-none d-md-none', {
                  'd-block': isTogleFormSearch,
                })}
              >
                <form className="form-inline d-flex justify-content-center">
                  <input
                    className="form-control w-75 mr-3"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Menubar isTogleSider={isTogleSider} {...props} />
    </HeaderWrapper>
  );
}

Header.propTypes = {
  isLogin: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = ({ authUser, cart }) => {
  const { user } = authUser;
  const isLogin = Boolean(user.userId);
  const cartLength = cart.length;
  return { user, isLogin, cartLength };
};

export default connect(
  mapStateToProps,
  {},
)(Header);
