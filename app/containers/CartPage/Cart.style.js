import styled from 'styled-components';

const CartWrapper = styled.div`
  ul {
    list-style: none;
    li {
      display: block;
      padding: 20px 0;
    }
  }
`;

export const TableWrapper = styled.table`
  font-size: 16px;
  td.col-item {
    vertical-align: middle;
  }
  span.delete {
    display: inline-block;
    padding-top: 5px;

    font-size: 20px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition: transform 500ms;
    }
  }
`;

export default CartWrapper;
