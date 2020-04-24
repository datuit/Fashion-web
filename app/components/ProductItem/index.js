import React, { useState, Fragment } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ProductItemWrapper, { BigModalWrapper } from './ProducItem.style';
import { Modal, openModal, closeModal } from '@redq/reuse-modal';

const BigModalComponent = props => {
  const { images } = props;
  return (
    <BigModalWrapper>
      <PerfectScrollbar>
        <button
          className="btn btn-outline-info btn-modal-close"
          onClick={() => closeModal()}
        >
          <ion-icon name="close-outline" />
        </button>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-6">
                <img className="img-fluid" src={images[0]} alt="" />
              </div>
              <div className="col-6">
                <img className="img-fluid" src={images[1]} alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="h3 pt-4 pb-4">MISTER BLAZER IN TAN CORDUROY</div>
            <div className="h5">$ 229.95</div>
            <div className="h3 pt-4 pb-4">
              or make 4 interest-free payments of $57.49 AUD fortnightly with
              Afterpay More info
            </div>
            <div className="h5 pt-4 pb-4">own it from $10/wklearn more »</div>
            <div className="h5">SKU:</div>
            <span>BT-AW19-M0111 TAN CORD</span>
            <br />
            <div className="text-uppercase d-inline-block p-4">
              <h5>QUANTITY :</h5>
              <button className="btn btn-light">
                <ion-icon name="caret-down-outline" />
              </button>
              <span className="m-3">0</span>
              <button className="btn btn-light">
                <ion-icon name="caret-up-outline" />
              </button>
            </div>
            <div className="text-uppercase d-inline-block p-4">
              <h5>SIZE :</h5>
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary active">
                  <input
                    type="radio"
                    name="options"
                    id="hatchback"
                    autoComplete="off"
                    defaultChecked
                  />
                  Hatchback
                </label>
                <label className="btn btn-secondary">
                  <input
                    type="radio"
                    name="options"
                    id="sedan"
                    autoComplete="off"
                  />
                  Sedan
                </label>
                <label className="btn btn-secondary">
                  <input
                    type="radio"
                    name="options"
                    id="suv"
                    autoComplete="off"
                  />
                  SUV
                </label>
              </div>
            </div>
          </div>
        </div>
      </PerfectScrollbar>
    </BigModalWrapper>
  );
};

const ProductItem = ({ colXsMd, colMdXl }) => {
  const [imageView, setImageView] = useState([0, 1]);
  const images = [
    'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/500x659/products/1537/16753/NERIMANU_X_BT_06-7__97715.1558421566.jpg?c=2',
    'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/1537/16591/BT-AW19-M0111_-_CAMEL_CORD__42093.1555293575.png?c=2',
  ];
  return (
    <ProductItemWrapper
      className={`col-${colXsMd || 6} col-md-${colMdXl || 4}`}
    >
      <div className="product-item text-center">
        <a href="/" className="product-item-img">
          <img
            className="img-1"
            src={images[imageView[0]]}
            // src="https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/500x659/products/1537/16753/NERIMANU_X_BT_06-7__97715.1558421566.jpg?c=2"
            alt=""
          />
          <img
            className="img-2"
            src={images[imageView[1]]}
            // src="https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/1537/16591/BT-AW19-M0111_-_CAMEL_CORD__42093.1555293575.png?c=2"
            alt=""
          />
          <button
            className="btn btn-outline-secondary quickview"
            onClick={e => {
              e.preventDefault();
              console.log('hello');
              return openModal({
                config: {
                  className: 'h-100',
                  disableDragging: false,
                  enableResizing: {
                    bottom: true,
                    bottomLeft: true,
                    bottomRight: true,
                    left: true,
                    right: true,
                    top: true,
                    topLeft: true,
                    topRight: true,
                  },
                  width: 10000,
                  height: 1000,
                  animationFrom: { transform: 'scale(0.3)' }, // react-spring <Spring from={}> props value
                  animationTo: { transform: 'scale(1)' }, //  react-spring <Spring to={}> props value
                  transition: {
                    mass: 1,
                    tension: 130,
                    friction: 26,
                  }, // react-spring config props
                },
                withRnd: false,
                overlayClassName: 'customeOverlayClass',
                closeOnClickOutside: true,
                component: BigModalComponent,
                componentProps: { images: images },
              });
            }}
          >
            Quick View
          </button>
        </a>
        <a href="/" className="m-1">
          <h5>Mister Blazer in Tan Corduroy</h5>
        </a>
        <span>$ 229.95</span>
      </div>
      <Modal />
    </ProductItemWrapper>
  );
};

export default ProductItem;
