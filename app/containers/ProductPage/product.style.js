import styled from 'styled-components';
import { respondBelow } from 'Style/mixin.style';

const ProductWrapper = styled.div``;

export const FilterSiderWrapper = styled.div`
  &.filter-block {
    .title-block-mobile {
      position: relative;
      padding: 20px 0;
      border: 1px solid #e5e5e5;
      ion-icon {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);

        cursor: pointer;
        font-size: 20px;
      }
    }
    .icon-efect ion-icon {
      cursor: pointer;
      font-size: 16px;
      &:hover {
        transform: rotate(180deg);
        transition: transform 300ms;
      }
    }
  }
  .filter-size,
  .filter-price {
    margin: 10px 0;
    .form-check {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
    }
    &.show {
      .form-check {
        padding: 10px 20px;
        max-height: 500px;
        transition: max-height 300ms;
      }
    }

    ${respondBelow(
      'sm',
      `
      margin: 0;
        &-action{
          margin: 0;
          padding: 20px;
          border: 1px solid #e5e5e5;
        }
    `,
    )}
  }
`;

export default ProductWrapper;
