import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import Modal from 'Components/Modal';
import ImgLoadding from 'Components/ImgLoading';
import ProductViewDetails from 'Components/ProductViewDetails';
import ProductImages from 'Components/ProductImages';
import ProductItemWrapper from './ProducItem.style';

const ProductItem = ({ product }) => {
  const {
    productName,
    productPrice,
    productImages,
    category,
    productId,
  } = product;

  const [imageView, setImageView] = useState([0, 1]);
  const [isModal, setModal] = useState(false);
  const onToggle = () => setModal(!isModal);
  const images = productImages;
  return (
    <ProductItemWrapper>
      <div className="product-item text-center">
        <Link
          to={`/${category.categoryName}/${productId}`}
          className="product-item-img"
        >
          <ImgLoadding
            className="img-1"
            src={images[imageView[0]].imageSrc}
            alt=""
          />
          <ImgLoadding
            className="img-2"
            src={images[imageView[1]].imageSrc}
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
        </Link>
        <Link to={`/${category.categoryName}/${productId}`} className="m-1">
          <h5>{productName}</h5>
        </Link>
        <span>$ {productPrice}</span>
      </div>
      <Modal isModal={isModal} setModal={setModal} onToggle={onToggle}>
        {isModal ? (
          <Row>
            <Col xs="12" md="7">
              <ProductImages images={images} />
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
