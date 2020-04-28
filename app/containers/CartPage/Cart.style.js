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
  .delete {
    display: inline-block;
    font-size: 20px;
  }
`;

export default CartWrapper;
