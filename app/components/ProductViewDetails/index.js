import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import Radio from 'Components/Radio';
import Tab from 'Components/Tab';
import ProductViewWrapper from './productviewdetail.style';

const ProductViewDetail = props => {
  const {
    productName,
    productNote,
    productPrice,
    productSku,
    productCost,
    productDecription,
  } = props.product;
  return (
    <ProductViewWrapper>
      <div className="h3 pt-4 pb-4">{productName}</div>
      <del className="h6 d-inline-block">$ {productCost}</del>
      <div className="h5 d-inline-block">$ {productPrice}</div>
      <div className="h6">
        {productCost
          ? `(You save $ ${(productCost - productPrice).toFixed(2)})`
          : ''}
      </div>
      <div className="h3 pt-4 pb-4">
        or make 4 interest-free payments of $57.49 AUD fortnightly with Afterpay
        More info
      </div>
      <div className="h5 pt-4 pb-4">own it from $10/wklearn more »</div>
      <div className="h5">SKU:</div>
      <span>{productSku || 'BT-AW19-M0111 TAN CORD'}</span>
      <br />
      <div className="text-uppercase d-inline-block p-4">
        <h5>QUANTITY :</h5>
        <button type="button" className="btn btn-light">
          <ion-icon name="caret-down-outline" />
        </button>
        <span className="m-3">0</span>
        <button type="button" className="btn btn-light">
          <ion-icon name="caret-up-outline" />
        </button>
      </div>
      <div className="text-uppercase d-inline-block p-4">
        <h5>SIZE :</h5>
        <Radio />
      </div>
      <Button className="text-uppercase p-3" color="dark" block>
        Add To Cart
      </Button>
      <div className="pt-5 pb-5">
        <div className="h5 text-danger">
          {productNote ? `NOTE: ${productNote}` : ''}
        </div>
        <div className="h4 pt-2 pb-2">PRODUCT DESCRIPTION</div>
        <p>{productDecription}</p>
        <a href="/" style={{ textDecoration: 'underline' }}>
          Need help with your sizing? Click here.
        </a>
      </div>
      <Tab />
    </ProductViewWrapper>
  );
};

ProductViewDetail.propTypes = {
  product: PropTypes.object,
};

export default ProductViewDetail;
