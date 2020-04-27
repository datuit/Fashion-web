import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Container, Col, Row } from 'reactstrap';
import Breadcrumb from 'Components/Breadcrumb';
import ProductItem from 'Components/ProductItem';
import Pagination from 'Components/Pagination';
import Spiner from 'Components/Spiner';
import { numberOfPagination } from 'Constants/varFrontend';
import Nanobar from 'Utils/Nanobar';
import ProductWrapper from './product.style';
import FilterSider from './FilterSider';

const productsQuery = gql`
  {
    productsCategory(categoryName: "men") {
      productId
      productName
      productNote
      productPrice
      productCost
      productSku
      productDecription
      productImages {
        imageId
        imageSrc
      }
      category {
        categoryName
      }
    }
  }
`;

const Product = props => {
  const { location } = props;
  const query = new URLSearchParams(location.search);
  const page = query.get('page') || 1;
  const { loading, data } = useQuery(productsQuery);
  if (loading) {
    Nanobar.go(30);
    return <Spiner />;
  }
  const products = data.productsCategory;
  const number = 2 * Math.round(products.length / numberOfPagination / 2);
  Nanobar.go(100);
  return (
    <ProductWrapper>
      <Container>
        <Breadcrumb title />
        <Row>
          <Col xs="12" md="3">
            <FilterSider />
          </Col>
          <Col xs="12" md="9">
            <div>
              {/* <Row className="justify-content-end mb-4">
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
                </Row> */}
              <Row>
                {loading ? (
                  <Spiner />
                ) : (
                  products
                    .slice(
                      (page - 1) * numberOfPagination,
                      page * numberOfPagination,
                    )
                    .map(product => (
                      <Col xs="6" md="4" key={product.productId}>
                        <ProductItem product={product} />
                      </Col>
                    ))
                )}
                <Col xs="12">
                  <Pagination number={number} />
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
  location: PropTypes.object,
};

export default Product;
