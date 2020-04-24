import styled from 'styled-components';
import { respondBelow } from 'Style/mixin.style';

const ProductWrapper = styled.div`
  .filter-block {
    .title-block-mobile {
      position: relative;
      border: 1px solid #e5e5e5;
      padding: 20px 0;
      ion-icon {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        font-size: 20px;
        cursor: pointer;
      }
    }
    .icon-plus-efect {
      ion-icon {
        cursor: pointer;
        font-size: 16px;
        transition: transform 300ms;
        &:hover {
          transform: rotate(90deg);
          transition: transform 300ms;
        }
      }
    }
    & > div {
      margin: 20px 0;
    }
    .filter-size {
      .form-check {
        .row {
          .col-6 {
            margin: 10px 0;
          }
        }
      }
    }
    .filter-size.show,
    .filter-price.show {
      .form-check {
        padding: 10px 20;
        max-height: 1000px;
        transition: max-height 1s ease-in-out;
      }
    }
    .form-check {
      max-height: 0;
      overflow: hidden;
      transition: max-height 1s ease-in-out;
    }
  }
`;

export default ProductWrapper;
