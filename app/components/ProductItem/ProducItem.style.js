import styled from 'styled-components';
import { respondBelow } from 'Style/mixin.style';

const ProductItemWrapper = styled.div`
  .product-item {
    margin-bottom: 40px;
    .product-item-img {
      display: block;
      position: relative;
      text-align: center;
      width: 100%;
      height: 400px;
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
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
      }
      button.quickview {
        position: absolute;
        top: 50%;
        left: 50%;
        opacity: 0;
        background-color: white;
        transform: translate(-50%, -50%) scale(1);
        transition: transform 500ms;
        cursor: pointer;
        &:hover {
          color: red;
          transform: translate(-50%, -50%) scale(1.1);
          transition: transform 500ms;
        }
      }
    }
  }
  .reuseModalCloseBtn {
    display: none;
  }
`;

export const BigModalWrapper = styled.div`
  position: relative;
  .btn-modal-close {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  img.full {
    width: 100%;
    height: 100%;
  }
`;

export default ProductItemWrapper;
