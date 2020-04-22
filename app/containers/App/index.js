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

import HomePage from 'Containers/HomePage/Loadable';
import NotFoundPage from 'Containers/NotFoundPage/Loadable';

import Header from 'Containers/Layout/Header/Header';
import Footer from 'Containers/Layout/Footer/Footer';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </React.Fragment>
  );
}
