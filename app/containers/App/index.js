/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'Containers/Layout/Header';
import Footer from 'Containers/Layout/Footer';

import Breadcrumb from 'Components/Breadcrumb';

import HomePage from 'Containers/HomePage/Loadable';
import NotFoundPage from 'Containers/NotFoundPage/Loadable';
import { Register, Login } from 'Containers/Sign';
import CartPage from 'Containers/CartPage';
import ProductPage from 'Containers/ProductPage';
import GlobalStyle from 'Style/global.style';
import MainWrapper from './style';

import 'Style/bootstrap.min.css';
import 'Style/perfect-scb.css';
import 'Style/reuse.css';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <MainWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login">
            <div className="container">
              <Breadcrumb />
              <Login />
            </div>
          </Route>
          <Route path="/register">
            <div className="container">
              <Breadcrumb />
              <Register />
            </div>
          </Route>
          <Route path="/cart">
            <div className="container">
              <Breadcrumb />
              <CartPage />
            </div>
          </Route>
          <Route path="/men" component={ProductPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </MainWrapper>
      <Footer />
      <GlobalStyle />
    </React.Fragment>
  );
}
