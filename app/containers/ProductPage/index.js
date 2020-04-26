import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Nanobar from 'Utils/Nanobar';

import {
  Container,
  Col,
  Row,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
} from 'reactstrap';
import Breadcrumb from 'Components/Breadcrumb';
import ProductItem from 'Components/ProductItem';
import Spiner from 'Components/Spiner';
import ProductWrapper from './product.style';
import FilterSider from './FilterSider';

const productsQuery = gql`
  {
    products {
      productId
      productName
      productNote
      productPrice
      productCost
      productDecription
      productSku
      subCateId
    }
  }
`;

const Product = props => {
  const { match } = props;
  console.log(match);
  const { loading, data } = useQuery(productsQuery);
  if (loading) {
    Nanobar.go(30);
  } else Nanobar.go(100);
  return (
    <ProductWrapper>
      <Container>
        <Breadcrumb />
        <Row>
          <Col xs="12" md="3">
            <FilterSider />
          </Col>
          <Col xs="12" md="9">
            <div>
              <Row className="justify-content-end mb-4">
                <Col xs="6" md="3">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg btn-block"
                  >
                    Model View
                  </button>
                </Col>
                <Col xs="6" md="3">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg btn-block"
                  >
                    Product View
                  </button>
                </Col>
              </Row>
              <Row>
                <Row>
                  {loading ? (
                    <Spiner />
                  ) : (
                    data.products.map(product => (
                      <Col xs="6" md="4" key={product.productId}>
                        <ProductItem product={product} />
                      </Col>
                    ))
                  )}
                </Row>
                <Col xs="12">
                  <Pagination className="d-flex justify-content-center">
                    <PaginationItem>
                      <PaginationLink first href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">5</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink last href="#" />
                    </PaginationItem>
                  </Pagination>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </ProductWrapper>
  );
};

Product.propTypes = {
  match: PropTypes.object,
};

export default Product;
