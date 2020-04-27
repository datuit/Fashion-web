import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import errorPage from 'Images/errorPage.png';

import NotFoundWrapper from './notfound.styles';

export default function NotFound() {
  return (
    <Container>
      <NotFoundWrapper id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1 style={{ backgroundImage: `url(${errorPage})` }}>404</h1>
          </div>
          <h2>Oops! This Page Could Not Be Found</h2>
          <p>
            Sorry but the page you are looking for does not exist, have been
            removed. name changed or is temporarily unavailable
          </p>
          {/* <FormattedMessage {...messages.header} /> */}
          <Link to="/">Go To Homepage</Link>
        </div>
      </NotFoundWrapper>
    </Container>
  );
}
