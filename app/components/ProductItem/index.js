import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import Modal from 'Components/Modal';
import Carousel from 'Components/Carousel';
import ImgLoadding from 'Components/ImgLoading';
import ProductViewDetails from 'Components/ProductViewDetails';
import ProductItemWrapper from './ProducItem.style';

const ProductItem = ({ product }) => {
  const { productName, productPrice } = product;
  const [imageView, setImageView] = useState([0, 1]);
  const [isModal, setModal] = useState(false);
  const onToggle = () => setModal(!isModal);
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
  return (
    <ProductItemWrapper>
      <div className="product-item text-center">
        <a href="/" className="product-item-img">
          <ImgLoadding
            className="img-1"
            src={images[imageView[0]].src}
            alt=""
          />
          <ImgLoadding
            className="img-2"
            src={images[imageView[1]].src}
            alt=""
          />
          <button
            className="btn btn-outline-secondary quickview"
            type="button"
            onClick={e => {
              e.preventDefault();
              onToggle();
            }}
          >
            Quick View
          </button>
        </a>
        <a href="/" className="m-1">
          <h5>{productName}</h5>
        </a>
        <span>$ {productPrice}</span>
      </div>
      <Modal isModal={isModal} setModal={setModal} onToggle={onToggle}>
        {isModal ? (
          <Row>
            <Col xs="12" md="7">
              <div>
                <Row className="d-md-none">
                  <Col>
                    <div className="carousel-modal">
                      <Carousel items={images} />
                    </div>
                  </Col>
                </Row>
                <Row className="d-none d-md-flex">
                  <Col xs="12" md="6">
                    <ImgLoadding
                      className="img-fluid"
                      src={images[0].src}
                      alt=""
                    />
                  </Col>
                  <Col xs="12" md="6">
                    <ImgLoadding
                      className="img-fluid"
                      src={images[1].src}
                      alt=""
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs="12" md="5">
              <ProductViewDetails product={product} />
            </Col>
          </Row>
        ) : (
          ''
        )}
      </Modal>
    </ProductItemWrapper>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
