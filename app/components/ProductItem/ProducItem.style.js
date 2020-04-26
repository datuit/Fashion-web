import styled from 'styled-components';
import { respondBelow } from 'Style/mixin.style';

const ProductItemWrapper = styled.div`
  .product-item {
    margin-bottom: 40px;
    .product-item-img {
      position: relative;

      display: block;
      width: 100%;
      height: 400px;

      text-align: center;

      ${respondBelow(
        'md',
        `
        height : 310px;
      `,
      )}
      &:hover {
        .img-1 {
          opacity: 0;
        }
        .img-2 {
          opacity: 1;
        }
        button.quickview {
          opacity: 1;
          transition: opacity 500ms;
        }
      }
      .img-1 {
        width: 100%;
        height: 100%;
        opacity: 1;
      }
      .img-2 {
        position: absolute;
        top: 50%;
        left: 50%;

        width: 100%;
        height: 100%;

        opacity: 0;

        transform: translate(-50%, -50%);
      }
      button.quickview {
        position: absolute;
        top: 50%;
        left: 50%;

        opacity: 0;
        cursor: pointer;

        background-color: white;

        transform: translate(-50%, -50%) scale(1);
        transition: transform 500ms;

        &:hover {
          color: red;

          transform: translate(-50%, -50%) scale(1.1);
          transition: transform 500ms;
        }
      }
    }
  }
`;

export default ProductItemWrapper;
