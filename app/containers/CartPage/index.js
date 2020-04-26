import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Breadcrumb from 'Components/Breadcrumb';
import ImgLoading from 'Components/ImgLoading';

import CartWrapper, { TableWrapper } from './Cart.style';

const Cart = props => {
  const { match } = props;
  return (
    <Container>
      <Breadcrumb match={match} />
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
            <tr>
              <th scope="row">
                <Row>
                  <Col xs="auto">
                    <ImgLoading
                      src="https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/1820/20401/Billow-Sleeve-Knit-Dress-in-Black__80700.1586241081.jpg?c=2"
                      alt=""
                      className="mr-3"
                      style={{
                        width: '80px',
                        height: '100px',
                      }}
                    />
                  </Col>
                  <Col className="p-5">
                    <a href="/">Billow Sleeve Knit Dress in Black</a>
                  </Col>
                </Row>
              </th>
              <td className="col-item">Mark</td>
              <td className="col-item">
                <button className="btn btn-light">
                  <ion-icon name="caret-down-outline" />
                </button>
                <span className="m-3">0</span>
                <button className="btn btn-light">
                  <ion-icon name="caret-up-outline" />
                </button>
              </td>
              <td className="col-item h5 align-middle">
                <span className="mr-2 align-middle">$ {0}</span>
                <span className="align-middle delete">
                  <ion-icon name="close-circle-outline" />
                </span>
              </td>
            </tr>
          </tbody>
        </TableWrapper>
        <div className="row">
          <div className="col-12 col-md-5 offset-md-7 mt-3">
            <ul className="w-100 h-100 m-0 p-0">
              <li>
                <div className="w-50 float-left h5">Subtotal:</div>
                <div className="w-50 float-left h5 text-right">$ 379.90</div>
              </li>
              <li>
                <div className="w-50 float-left h5">Shipping:</div>
                <div className="w-50 float-left h5 text-right ">Add Info</div>
              </li>
              <li>
                <div className="w-50 float-left h5">Tax:</div>
                <div className="w-50 float-left h5 text-right">$ 34.54</div>
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
                <div className="w-50 float-left h4 text-right">$ 379.90</div>
              </li>
              <li>
                <div className="text-center">
                  <a className="btn btn-dark pr-5 pl-5 pt-3 pb-3" href="/">
                    Check Out
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </CartWrapper>
    </Container>
  );
};

export default Cart;
