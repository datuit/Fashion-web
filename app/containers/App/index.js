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
import { RegisterPage, LoginPage } from 'Containers/Sign/Loadable';
import CartPage from 'Containers/CartPage/Loadable';
import ProductPage from 'Containers/ProductPage/Loadable';
import ItemPage from 'Containers/ItemPage/Loadable';

import { ProtectedRouter, RouteWithRouteAuth } from 'Utils/authRoute';

import routes from 'Constants/routesProduct';

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
          <Route path="/men" component={ProductPage} />

          <Route path="/category/men" component={ProductPage} />

          {/* {routes.map((route)=>{
            return (
              <Fragment>
                <Route path={`/category/${route.category.trim()}`} {ItemPage}/>
              </Fragment>
            )
          })} */}

          <RouteWithRouteAuth path="/login" component={LoginPage} />
          <RouteWithRouteAuth path="/register" component={RegisterPage} />

          {/* <RouteWithRouteAuth
            path="/category/:categoryname/:subcategory/:productId"
            component={ItemPage}
          /> */}

          <ProtectedRouter path="/Helo">
            <h1>Hello</h1>
          </ProtectedRouter>

          <Route component={NotFoundPage} />
        </Switch>
      </MainWrapper>
      <Footer />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
