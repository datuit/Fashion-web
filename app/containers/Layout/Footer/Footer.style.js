import styled from 'styled-components';
import { respondBelow } from 'Style/mixin.style';

const FooterWrapper = styled.footer`
  margin-top: 20px;
  padding: 30px;

  background-color: #000;
  color: white;
  ${respondBelow(
    'sm',
    `
      h5 {
        display: block;
        padding-top: 20px;
        border-bottom: 2px solid white;
      }
  `,
  )}
  h5 {
    padding-bottom: 20px;
  }

  ul li {
    display: block;
    a {
      color: white !important;
      &:hover {
        color: green !important;
      }
    }

    &.social-network a {
      margin-right: 10px;
      font-size: 25px;
    }

    &.payment-network img {
      width: 50%;
    }
  }
  background: black;
`;

export default FooterWrapper;
