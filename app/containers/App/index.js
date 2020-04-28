/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'Containers/Layout/Header';
import Footer from 'Containers/Layout/Footer';
import HomePage from 'Containers/HomePage/Loadable';
import NotFoundPage from 'Containers/NotFoundPage/Loadable';
import { RegisterPage, LoginPage, LogoutPage } from 'Containers/Sign/Loadable';
import AccountPage from 'Containers/AccountPage/Loadable';
import CartPage from 'Containers/CartPage/Loadable';
import ProductPage from 'Containers/ProductPage/Loadable';
import ItemPage from 'Containers/ItemPage/Loadable';

import { ProtectedRouter, RouteWithRouteAuth } from 'Utils/authRoute';

import routes from 'Utils/routes';

import GlobalStyle from 'Style/global.style';
import MainWrapper from './style';

import 'Style/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <MainWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/cart" component={CartPage} />

          {routes.map(route => (
            <Route
              key={route.category}
              exact
              path={`/${route.category}`}
              component={ProductPage}
            />
          ))}
          {routes.map(route => (
            <Route
              key={route.category}
              path={`/${route.category}/:productId`}
              component={ItemPage}
            />
          ))}

          <RouteWithRouteAuth path="/login" component={LoginPage} />
          <RouteWithRouteAuth path="/register" component={RegisterPage} />
          <ProtectedRouter path="/logout" component={LogoutPage} />

          <ProtectedRouter path="/account" component={AccountPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </MainWrapper>
      <Footer />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
