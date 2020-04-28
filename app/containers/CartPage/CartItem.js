import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import _ from 'lodash';
import ImgLoading from 'Components/ImgLoading';

const CartItem = ({ product, changCartAct, removeCartAct }) => {
  const {
    productId,
    productName,
    productPrice,
    productImage,
    category,
  } = product;
  const [productQuantity, setQuantity] = useState(product.productQuantity);
  const changeTimeOutRef = useRef(null);

  useEffect(() => {
    if (productQuantity !== product.productQuantity) {
      clearTimeout(changeTimeOutRef.current);
      changeTimeOutRef.current = setTimeout(() => {
        onChangeCart();
      }, 800);
    }
  }, [productQuantity]);
  const onChangeQuantity = value => {
    if (productQuantity + value >= 1) {
      setQuantity(productQuantity + value);
    }
  };
  const onChangeCart = () => {
    const productTemp = _.merge(product, {
      productQuantity,
    });
    changCartAct(productTemp);
  };
  const onRemoveCart = () => {
    removeCartAct(productId);
  };
  return (
    <tr key={productId}>
      <th scope="row">
        <Row>
          <Col xs="auto">
            <ImgLoading
              src={productImage}
              alt=""
              className="mr-3"
              style={{
                width: '80px',
                height: '100px',
              }}
            />
          </Col>
          <Col className="p-5">
            <Link to={`/${category.categoryName}/${productId}`}>
              {productName}
            </Link>
          </Col>
        </Row>
      </th>
      <td className="col-item">$ {productPrice}</td>
      <td className="col-item">
        <button
          type="button"
          className="btn btn-light"
          onClick={() => onChangeQuantity(-1)}
        >
          <ion-icon name="caret-down-outline" />
        </button>
        <span className="m-3">{productQuantity}</span>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => onChangeQuantity(1)}
        >
          <ion-icon name="caret-up-outline" />
        </button>
      </td>
      <td className="col-item h5 align-middle text-right">
        <span className="mr-2 align-middle ">
          $ {productQuantity * productPrice}
        </span>
        <button
          type="button"
          className="btn btn-light align-middle delete"
          onClick={onRemoveCart}
        >
          <ion-icon name="close-outline" />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
