import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Row, Col, Container } from 'reactstrap';
import Breadcrumb from 'Components/Breadcrumb';
import Spiner from 'Components/Spiner';
import ProductViewDetails from 'Components/ProductViewDetails';
import ProductImages from 'Components/ProductImages';
import Nanobar from 'Utils/Nanobar';
import ItemWrapper from './item.style';

const GET_ITEM_PAGE = gql`
  query GetItemPage($productId: Int!, $categoryName: String!) {
    product(productId: $productId, categoryName: $categoryName) {
      productId
      productName
      productNote
      productPrice
      productCost
      productDecription
      productSku
      categoryId
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

const Item = ({ match, history }) => {
  const categoryName = match.url.split('/')[1];
  const productId = parseInt(match.params.productId);
  const { loading, error, data } = useQuery(GET_ITEM_PAGE, {
    variables: {
      productId,
      categoryName,
    },
  });

  if (loading) {
    Nanobar.go(30);
    return <Spiner />;
  }
  if (error) {
    Nanobar.go(100);
    return <Redirect to="/" />;
  }
  Nanobar.go(100);
  const { product } = data;
  const images = product.productImages;
  return (
    <Container>
      <Breadcrumb />
      <ItemWrapper>
        <Row>
          <Col xs="12" md="7">
            <ProductImages images={images} />
          </Col>
          <Col xs="12" md="5">
            <ProductViewDetails product={product} />
          </Col>
        </Row>
      </ItemWrapper>
    </Container>
  );
};

export default Item;
