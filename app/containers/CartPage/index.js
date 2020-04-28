import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container } from 'reactstrap';
import Breadcrumb from 'Components/Breadcrumb';
import Modal from 'Components/Modal';
import MultiStep from 'Components/MultiStep';

import _ from 'lodash';

import { changeCart, removeCart } from 'Redux/actions';
import CartWrapper, { TableWrapper } from './Cart.style';
import CartItem from './CartItem';

const Cart = props => {
  const { cart, changCartAct, removeCartAct } = props;
  const [isModal, setModal] = useState(false);
  const onToggle = () => setModal(!isModal);

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
            {cart.map(product => (
              <CartItem
                key={product.productId}
                product={product}
                changCartAct={changCartAct}
                removeCartAct={removeCartAct}
              />
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
                  <button
                    type="button"
                    className="btn btn-light pr-5 pl-5 pt-3 pb-3"
                    onClick={onToggle}
                  >
                    Check Out
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Modal isModal={isModal} setModal={setModal} onToggle={onToggle}>
          {isModal ? <MultiStep /> : ''}
        </Modal>
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

export default connect(
  mapStateToProps,
  {
    changCartAct: changeCart,
    removeCartAct: removeCart,
  },
)(Cart);
