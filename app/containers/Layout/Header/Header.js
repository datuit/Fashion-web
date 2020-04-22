import React from 'react';
import logo from 'Images/alogo.png';
import HeaderWrapper from './Header.style';

function Header() {
  return (
    <HeaderWrapper className="header">
      <div className="container-fluid">
        <div className="header-main">
          <div className="row">
            <div className="col-sm">
              <span>FREE SHIPPING ON ALL ORDERS OVER $300</span>
            </div>
            <div className="col-sm">
              <a href="/" className="header-main-logo">
                <img className="logo" src={logo} alt="logo" />
              </a>
            </div>
            <div className="col-sm">3</div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
