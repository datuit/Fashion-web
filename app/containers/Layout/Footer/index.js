import React from 'react';
import FooterWrapper from './Footer.style';
function Footer() {
  return (
    <FooterWrapper>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-3 text-center text-md-right">
            <img
              src="https://cdn11.bigcommerce.com/s-9srn18to/content/img/logo-black-inverted2.png"
              alt=""
            />
          </div>
          <div className="col-12 col-md-3">
            <h5>BOHEMIAN TRADERS</h5>
            <ul>
              <li>
                <a href>About Us</a>
              </li>
              <li>
                <a href>Contact Us</a>
              </li>
              <li>
                <a href>Work With Us</a>
              </li>
              <li>
                <a href>Terms &amp; Privacy Policy</a>
              </li>
              <li>
                <a href>Inclusive Size Range</a>
              </li>
              <li>
                <a href>Flexible Payment</a>
              </li>
              <li>
                <a href>Options</a>
              </li>
              <li>
                <a href>Shipping &amp; Returns</a>
              </li>
              <li>
                <a href>Gift Certificates</a>
              </li>
              <li>
                <a href>Journal</a>
              </li>
              <li>
                <a href />
                Sitemap
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h5>CATEGORIES</h5>
            <ul>
              <li>
                <a href>WHATS NEW</a>
              </li>
              <li>
                <a href>DRESSES</a>
              </li>
              <li>
                <a href>WOMEN</a>
              </li>
              <li>
                <a href>CURVE</a>
              </li>
              <li>
                <a href>MEN</a>
              </li>
              <li>
                <a href>KIDS</a>
              </li>
              <li>
                <a href>CAMPAIGN</a>
              </li>
              <li>
                <a href>SALE</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h5>FOLLOW US</h5>
            <ul>
              <li className="social-network">
                <a href>
                  {' '}
                  <ion-icon name="logo-instagram" />
                </a>
                <a href>
                  {' '}
                  <ion-icon name="logo-facebook" />
                </a>
                <a href>
                  {' '}
                  <ion-icon name="logo-skype" />
                </a>
              </li>
              <li>
                <h5>SECURE PAYMENTS WITH</h5>
              </li>
              <li className="payment-network">
                <img
                  src="https://cdn11.bigcommerce.com/s-9srn18to/content/img/payment_icons-5.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
