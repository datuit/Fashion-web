import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  &#notfound {
    width: 100%;
    .notfound {
      max-width: 767px;
      width: 100%;
      line-height: 1.4;
      padding: 0px 15px;
      margin: 0 auto;

      h1 {
        font-size: 100px;
        text-align: center;
      }

      h2 {
        font-size: 26px;
        font-weight: 700;
        margin: 0;
      }

      p {
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 0px;
        text-transform: uppercase;
      }

      a {
        font-family: 'Titillium Web', sans-serif;
        display: inline-block;
        text-transform: uppercase;
        color: #fff;
        text-decoration: none;
        border: none;
        background: #5c91fe;
        padding: 10px 40px;
        font-size: 14px;
        font-weight: 700;
        border-radius: 1px;
        margin-top: 15px;
        transition: 0.2s all;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

export default NotFoundWrapper;
