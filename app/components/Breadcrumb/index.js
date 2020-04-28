import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import BreadcrumbWrapper from './Beadcrumb.style';

const Breadcrumb = ({ title }) => {
  const pathnameArr = window.location.pathname.split('/');
  return (
    <BreadcrumbWrapper>
      <ol className="breadcrumb text-capitalize">
        {pathnameArr.map((value, i) => {
          if (pathnameArr.length - 1 === i) {
            return (
              <li key={i} className="breadcrumb-item active ">
                <Link to={`/${value}`}>{value}</Link>
              </li>
            );
          }
          return pathnameArr[i] ? (
            <li key={i} className="breadcrumb-item">
              <Link to={`/${value}`}> {value}</Link>
            </li>
          ) : (
            <li key={i} className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
          );
        })}
      </ol>
      {_.isBoolean(title) ? (
        <h1 className="text-capitalize">
          {pathnameArr[pathnameArr.length - 1]}
        </h1>
      ) : (
        ''
      )}
      {_.isString(title) ? <h1 className="text-capitalize">{title}</h1> : ''}
    </BreadcrumbWrapper>
  );
};

export default Breadcrumb;
