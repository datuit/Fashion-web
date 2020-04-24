import React from 'react';
import Breadcrumb from 'Components/Breadcrumb';
import ProductItem from 'Components/ProductItem';
import ProductWrapper from './product.style';

const Product = () => {
  return (
    <ProductWrapper>
      <div className="container">
        <Breadcrumb />
        <div className="row">
          <div className="col-12 col-md-3 filter-block">
            <div className="d-none d-md-block">
              <div className="h5">Refine by</div>

              <span>No filters applied</span>
            </div>
            <div className="title-block-mobile d-block d-md-none">
              <div className="h5 text-uppercase text-center">Refine</div>
            </div>
            <div className="filter-size show">
              <div className="filter-size-action">
                <div className="w-50 h5 d-inline-block">Size</div>
                <div className="w-50 d-inline-block text-right ">
                  <span className="icon-plus-efect">
                    <ion-icon name="add-outline" />
                  </span>
                </div>
              </div>
              <div className="form-check">
                <div className="row">
                  <div className="col-6">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck0"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      XXS
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      XS
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      S
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      M
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      L
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      XL
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      2XL
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      3XL
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      4XL
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-price show">
              <div className="filter-price-action">
                <div className="w-50 h5 d-inline-block">Price</div>
                <div className="w-50 d-inline-block text-right ">
                  <span className="icon-plus-efect">
                    <ion-icon name="add-outline" />
                  </span>
                </div>
              </div>
              <div className="form-check">
                <div className="row">
                  <div className="col">
                    <input
                      className="form-control"
                      type="number"
                      id="example-number-input"
                      placeholder="Min"
                    />
                  </div>
                  <div className="col">
                    <input
                      className="form-control"
                      type="number"
                      id="example-number-input"
                      placeholder="Max"
                    />
                  </div>
                  <div className="col">
                    <button className="btn btn-outline-secondary">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9">
            <div>
              <div className=" row justify-content-end mb-4">
                <div className="col-6 col-md-3">
                  <button className="btn btn-outline-secondary btn-lg btn-block">
                    Model View
                  </button>
                </div>
                <div className="col-6 col-md-3">
                  <button className="btn btn-outline-secondary btn-lg btn-block">
                    Product View
                  </button>
                </div>
              </div>
              <div className="row">
                {new Array(10).fill('').map((value, i) => {
                  return <ProductItem colXsMd={6} colMdXl={4} />;
                })}
                <div className="col-12 ">
                  <nav aria-label="Page navigation example text-center">
                    <ul className="pagination d-flex justify-content-center">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductWrapper>
  );
};

export default Product;
