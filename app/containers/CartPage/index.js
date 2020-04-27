import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Row, Col, Container } from 'reactstrap';
import Breadcrumb from 'Components/Breadcrumb';
import ImgLoading from 'Components/ImgLoading';

import _ from 'lodash';

import CartWrapper, { TableWrapper } from './Cart.style';

const Cart = props => {
  const { cart } = props;
  const subtotal = _.sumBy(cart, o => o.productPrice * o.productQuantity);
  const tax = parseFloat((subtotal * 3) / 100);
  return (
    <Container>
      <Breadcrumb title />
      <CartWrapper>
        <TableWrapper className="table ">
          <thead>
            <tr>
              <th scope="col ">Item</th>
              <th scope="col"> Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.productId}>
                <th scope="row">
                  <Row>
                    <Col xs="auto">
                      <ImgLoading
                        src={item.productImage}
                        alt=""
                        className="mr-3"
                        style={{
                          width: '80px',
                          height: '100px',
                        }}
                      />
                    </Col>
                    <Col className="p-5">
                      <Link
                        to={`/${item.category.categoryName}/${item.productId}`}
                      >
                        {item.productName}
                      </Link>
                    </Col>
                  </Row>
                </th>
                <td className="col-item">{item.productPrice}</td>
                <td className="col-item">
                  <button type="button" className="btn btn-light">
                    <ion-icon name="caret-down-outline" />
                  </button>
                  <span className="m-3">{item.productQuantity}</span>
                  <butto type="button" className="btn btn-light">
                    <ion-icon name="caret-up-outline" />
                  </butto>
                </td>
                <td className="col-item h5 align-middle text-right">
                  <span className="mr-2 align-middle ">
                    $ {(item.productQuantity * item.productPrice).toFixed(2)}
                  </span>
                  <span className="align-middle delete">
                    <ion-icon name="close-circle-outline" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </TableWrapper>
        <div className="row">
          <div className="col-12 col-md-5 offset-md-7 mt-3">
            <ul className="w-100 h-100 m-0 p-0">
              <li>
                <div className="w-50 float-left h5">Subtotal:</div>
                <div className="w-50 float-left h5 text-right">
                  $ {subtotal}
                </div>
              </li>
              <li>
                <div className="w-50 float-left h5">Shipping:</div>
                <div className="w-50 float-left h5 text-right ">Add Info</div>
              </li>
              <li>
                <div className="w-50 float-left h5">Tax:</div>
                <div className="w-50 float-left h5 text-right">
                  $ {tax} (3%)
                </div>
              </li>

              <li>
                <div className="w-50 float-left h5">Coupon Code:</div>
                <div className="w-50 float-left h5 text-right">Add Coupon</div>
              </li>
              <li>
                <div className="w-50 float-left h5">Gift Certificate:</div>
                <div className="w-50 float-left h5 text-right">
                  Gift Certificate
                </div>
              </li>
              <li>
                <div className="w-50 float-left h5">Grand total:</div>
                <div className="w-50 float-left h4 text-right">
                  $ {subtotal + tax}
                </div>
              </li>
              <li>
                <div className="text-center">
                  <Link to="/" className="btn btn-light pr-5 pl-5 pt-3 pb-3">
                    Check Out
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </CartWrapper>
    </Container>
  );
};

const mapStateToProps = state => {
  const { cart } = state;
  return {
    cart,
  };
};

export default connect(mapStateToProps)(Cart);
