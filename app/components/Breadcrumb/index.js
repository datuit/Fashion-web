import React from 'react';
import BreadcrumbWrapper from './Beadcrumb.style';

const Breadcrumb = () => (
  <BreadcrumbWrapper>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li className="breadcrumb-item active">
        <a href="/">Login</a>
      </li>
    </ol>
    <h1>Sign in</h1>
  </BreadcrumbWrapper>
);

export default Breadcrumb;
