import styled from 'styled-components';

const BreadcrumbWrapper = styled.nav`
  .breadcrumb {
    font-size: 14px;

    background-color: transparent;
    &-item {
      a {
        color: #757575 !important;
      }
    }
  }
  h1 {
    margin: 14px 0 42px;

    color: #444444;
  }
`;

export default BreadcrumbWrapper;
