import styled from 'styled-components';

const BreadcrumbWrapper = styled.nav`
  .breadcrumb {
    background-color: transparent;
    font-size: 14px;
    &-item {
      a {
        color: #757575 !important;
      }
    }
  }
  h1 {
    color: #444444;
    margin: 14px 0 42px;
  }
`;

export default BreadcrumbWrapper;
