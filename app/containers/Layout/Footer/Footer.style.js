import styled from 'styled-components';
import { respondBelow } from 'Style/mixin.style';

const FooterWrapper = styled.footer`
  margin-top: 20px;
  background-color: #000;
  color: white;
  padding: 30px;
  ${respondBelow(
    'sm',
    `
      h5 {
        border-bottom: 2px solid white;
    display: block;
    padding-top: 20px;
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
      font-size: 25px;
      margin-right: 10px;
    }

    &.payment-network img {
      width: 50%;
    }
  }
  background: black;
`;

export default FooterWrapper;
