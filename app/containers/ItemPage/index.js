import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Row, Col } from 'reactstrap';
import Carousel from 'Components/Carousel';
import Spiner from 'Components/Spiner';
import ItemWrapper from './item.style';
import ProductViewDetails from 'Components/ProductViewDetails';

const productQuery = gql`
  query product($productId: String) {
    productId
    productName
    productNote
    productPrice
    productCost
    productDecription
    productSku
    subCateId
  }
`;

const images = [
  {
    src:
      'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/500x659/products/1537/16753/NERIMANU_X_BT_06-7__97715.1558421566.jpg?c=2',
    altText: '0',
  },
  {
    src:
      'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/1537/16591/BT-AW19-M0111_-_CAMEL_CORD__42093.1555293575.png?c=2',
    altText: '1',
  },
];

const Item = props => {
  // const { loading, error, data } = useQuery(productQuery,{
  //   variables : {
  //     userId
  //   }
  // });

  // const { productProps } = props;
  // console.log('product', productProps);
  // console.log('data', data);
  // if (loading) return <Spiner />;
  console.log(props);
  return (
    <ItemWrapper>
      {/* <Row>
        <Col xs="12" md="7">
          <Row className="d-md-none">
            <Col>
              <div className="carousel-modal">
                <Carousel items={images} />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs="12" md="5">
          <ProductViewDetails product={product} />
        </Col>
      </Row> */}
    </ItemWrapper>
  );
};

export default Item;
