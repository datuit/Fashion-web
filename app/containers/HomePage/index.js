/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
// import { FormattedMessage } from 'react-intl';
// import { gql, from } from 'apollo-boost';
// import { useQuery, use } from '@apollo/react-hooks';
// import Axios from 'axios';
import HomeWrapper from './style';

export default function HomePage() {
  // const { loading, error, data } = useQuery(query);
  // const [username, setusername] = useState('');
  // const [password, setpassword] = useState('');
  // const [usernames, setusernames] = useState('');
  // const [passwords, setpasswords] = useState('');
  // const submit = e => {
  //   e.preventDefault();
  //   Axios({
  //     method: 'POST',
  //     url: 'api/user/signup',
  //     data: {
  //       username,
  //       password,
  //     },
  //   });
  // };
  // const submit1 = e => {
  //   e.preventDefault();
  //   Axios({
  //     method: 'POST',
  //     url: 'api/user/signin',
  //     data: {
  //       usernames,
  //       passwords,
  //     },
  //   });
  // };
  // if (loading) return <h1>Loading.....</h1>;
  return (
    <HomeWrapper>
      <section className="carousel">
        <a href="/">
          <img
            src="https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/carousel/974/RENAISSANCE-CAROUSEL-2.jpg?c=2"
            alt="2"
          />
        </a>
      </section>
      <section className="home-card">
        <div className="container">
          <div className="home-card-list text-center">
            <div className="three-col">
              <div className="row">
                <div className="col-12 col-md-4">
                  <a href="/" className="item">
                    <img
                      src="https://cdn11.bigcommerce.com/s-9srn18to/content/img/homepage/RENAISSANCE-LAUNCH-CTA1_.jpg"
                      alt=""
                    />
                    <div className="content">Shop what news</div>
                  </a>
                </div>
                <div className="col-12 col-md-4">
                  <a href="/" className="item">
                    <img
                      src="https://cdn11.bigcommerce.com/s-9srn18to/content/img/homepage/RENAISSANCE-LAUNCH-CTA1_.jpg"
                      alt=""
                    />
                    <div className="content">Shop top</div>
                  </a>
                </div>
                <div className="col-12 col-md-4">
                  <a href="/" className="item">
                    <img
                      src="https://cdn11.bigcommerce.com/s-9srn18to/content/img/homepage/RENAISSANCE-LAUNCH-CTA1_.jpg"
                      alt=""
                    />
                    <div className="content">shop denim</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="one-col">
              <div className="row">
                <div className="col-12">
                  <a href="/" className="item">
                    <img
                      src=" https://cdn11.bigcommerce.com/s-9srn18to/content/img/homepage/RENAISSANCE-LAUNCH-L1_.jpg"
                      alt=""
                    />
                    <div className="content">shop denim</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="two-col">
              <div className="row">
                <div className="col-12 col-md-6">
                  <a href="/" className="item">
                    <img
                      src="https://cdn11.bigcommerce.com/s-9srn18to/content/img/homepage/RENAISSANCE-LAUNCH-CTA1_.jpg"
                      alt=""
                    />
                    <div className="content">shop outerwear</div>
                  </a>
                </div>
                <div className="col-12 col-md-6">
                  <a href="/" className="item">
                    <img
                      src="https://cdn11.bigcommerce.com/s-9srn18to/content/img/homepage/RENAISSANCE-LAUNCH-CTA1_.jpg"
                      alt=""
                    />
                    <div className="content">shop outerwear</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="one-col">
              <div className="row">
                <div className="col-12">
                  <a href="/" className="item">
                    <img
                      src=" https://cdn11.bigcommerce.com/s-9srn18to/content/img/homepage/RENAISSANCE-LAUNCH-L1_.jpg"
                      alt=""
                    />
                    <div className="content">shop denim</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="newletter">
            <form className="row">
              <div className="col-12 col-md text-center">
                <span>
                  <ion-icon name="mail-outline" />
                  Stay up to date
                </span>
              </div>
              <div className="col-12 col-md-4 pb-2 pb-md-0">
                <input type="email" placeholder="Your email address" />
              </div>
              <div className="col-12 col-md-4">
                <input type="submit" defaultValue="Subcribe" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </HomeWrapper>
  );
}

// const query = gql`
//   {
//     hello
//   }
// `;
