import styled from 'styled-components';

const ProductViewWrapper = styled.div`
  .btn-group {
    outline: none;
    button {
      margin: 0 10px;
      &.active {
        border: 2px solid #000 !important;
      }
    }
  }
`;

export default ProductViewWrapper;
