import React, { useState } from 'react';
import classnames from 'classnames';
import { FilterSiderWrapper } from './product.style';

const FilterSider = () => {
  const [isTogleSize, setTogleSize] = useState(true);
  const [isToglePrice, setToglePrice] = useState(true);
  const onTogleSize = () => setTogleSize(!isTogleSize);
  const onToglePrice = () => setToglePrice(!isToglePrice);
  return (
    <FilterSiderWrapper className="filter-block">
      <div className="d-none d-md-block mt-4 mb-4">
        <div className="h5">Refine by</div>

        <span>No filters applied</span>
      </div>
      <div className="title-block-mobile d-block d-md-none">
        <div className="h5 text-uppercase text-center">Refine</div>
      </div>
      <div className={classnames('filter-size', { show: isTogleSize })}>
        <div className="filter-size-action mt-2 mb-2">
          <div className="w-50 h5 d-inline-block">Size</div>
          <div className="w-50 d-inline-block text-right ">
            <span className="icon-efect">
              {isTogleSize ? (
                <ion-icon name="remove-outline" onClick={onTogleSize} />
              ) : (
                <ion-icon name="add-outline" onClick={onTogleSize} />
              )}
            </span>
          </div>
        </div>
        <div className="form-check">
          <div className="row">
            <div className="col-6 ">
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
      <div className={classnames('filter-price', { show: isToglePrice })}>
        <div className="filter-price-action">
          <div className="w-50 h5 d-inline-block">Price</div>
          <div className="w-50 d-inline-block text-right ">
            <span className="icon-efect">
              {isToglePrice ? (
                <ion-icon name="remove-outline" onClick={onToglePrice} />
              ) : (
                <ion-icon name="add-outline" onClick={onToglePrice} />
              )}
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
              <button className="btn btn-outline-secondary">Update</button>
            </div>
          </div>
        </div>
      </div>
    </FilterSiderWrapper>
  );
};

export default FilterSider;
