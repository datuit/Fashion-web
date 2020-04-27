import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationCpn = ({ number }) => {
  const { pathname } = window.location;
  const arrNumber = new Array(number).fill('');
  return (
    <Pagination className="d-flex justify-content-center">
      <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      {arrNumber.map((value, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Link key={i} className="page-link" to={`${pathname}?page=${i + 1}`}>
          {i + 1}
        </Link>
      ))}
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  );
};

PaginationCpn.propTypes = {
  number: PropTypes.number,
};

export default PaginationCpn;
