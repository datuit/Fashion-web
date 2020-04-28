import React, { useState } from 'react';
import classnames from 'classnames';
import { Row, Col } from 'reactstrap';
import Shipping from './Shipping';
import Address from './Address';
import MultiWrapper, { ShippingWrapper } from './multistep.style';

const MultiStep = () => {
  const [activeNumber, setActiveNumber] = useState(0);

  const btnsProgress = document.querySelectorAll(
    '.multisteps-form .multisteps-form__progress-btn',
  );
  btnsProgress.forEach((btn, i) => {
    btn.className = classnames('multisteps-form__progress-btn', {
      active: i <= activeNumber,
    });
  });
  const panelsProgress = document.querySelectorAll('.multisteps-form__panel');
  panelsProgress.forEach((panel, i) => {
    panel.className = classnames(
      'multisteps-form__panel shadow p-4 rounded bg-white',
      {
        active: i === activeNumber,
      },
    );
  });
  return (
    <MultiWrapper className="multisteps-form">
      <Row>
        <Col xs="12" lg="8" className="ml-auto mr-auto mb-4">
          <div className="multisteps-form__progress">
            <button
              className="multisteps-form__progress-btn"
              type="button"
              title="User Info"
              onClick={() => setActiveNumber(0)}
            >
              Shipping
            </button>
            <button
              className="multisteps-form__progress-btn"
              type="button"
              title="Address"
              onClick={() => setActiveNumber(1)}
            >
              Address
            </button>
            <button
              className="multisteps-form__progress-btn"
              type="button"
              title="Order Info"
              onClick={() => setActiveNumber(2)}
            >
              Payment
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" lg="8" className=" m-auto">
          <form className="multisteps-form__form">
            <div
              className="multisteps-form__panel shadow p-4 rounded bg-white"
              data-animation="scaleIn"
            >
              <h3 className="multisteps-form__title">Shipping Unit</h3>
              <div className="multisteps-form__content">
                <ShippingWrapper>
                  <Shipping />
                </ShippingWrapper>
                <Row>
                  <Col xs="12" className="button-row d-flex mt-4">
                    <button
                      className="btn btn-info ml-auto js-btn-next"
                      type="button"
                      title="Next"
                      onClick={() => setActiveNumber(activeNumber + 1)}
                    >
                      Next
                    </button>
                  </Col>
                </Row>
              </div>
            </div>
            <div
              className="multisteps-form__panel shadow p-4 rounded bg-white"
              data-animation="scaleIn"
            >
              <h3 className="multisteps-form__title">Your Address</h3>
              <div className="multisteps-form__content">
                <Address />
                <Row>
                  <Col xs="12" className="button-row d-flex mt-4">
                    <button
                      className="btn btn-info js-btn-prev"
                      type="button"
                      title="Prev"
                      onClick={() => setActiveNumber(activeNumber - 1)}
                    >
                      Prev
                    </button>
                    <button
                      className="btn btn-info ml-auto js-btn-next"
                      type="button"
                      title="Next"
                      onClick={() => setActiveNumber(activeNumber + 1)}
                    >
                      Next
                    </button>
                  </Col>
                </Row>
              </div>
            </div>
            <div
              className="multisteps-form__panel shadow p-4 rounded bg-white"
              data-animation="scaleIn"
            >
              <h3 className="multisteps-form__title">Payment</h3>
              <div className="multisteps-form__content">
                <h1>...DEMO ! PLEAS CLICK BUY</h1>
              </div>
              <Row>
                <Col xs="12" className="button-row d-flex mt-4">
                  <button
                    className="btn btn-info js-btn-prev"
                    type="button"
                    title="Prev"
                    onClick={() => setActiveNumber(activeNumber - 1)}
                  >
                    Prev
                  </button>
                  <button
                    className="btn btn-success ml-auto js-btn-next"
                    type="button"
                    title="Next"
                    onClick={() => setActiveNumber(activeNumber - 1)}
                  >
                    Buy
                  </button>
                </Col>
              </Row>
            </div>
          </form>
        </Col>
      </Row>
    </MultiWrapper>
  );
};

export default MultiStep;
