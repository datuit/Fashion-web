import styled from 'styled-components';
import { respondBelow } from 'Style/mixin.style';

const HomeWrapper = styled.div`
  width: 100%;
  .carousel {
    img {
      width: 100vw;

      background-size: contain;
      object-fit: fill;
    }
  }
  .home-card-list {
    margin: 20px 0;

    .item {
      position: relative;

      display: block;
      margin: 20px 0;
      color: white;
      .content {
        position: absolute;
        top: 50%;
        left: 50%;

        opacity: 0;
        color: white;

        text-transform: uppercase;
        font-size: 25px;
        letter-spacing: 10px;

        transform: translate(-50%, -50%);
      }

      img {
        width: 100%;
      }

      &::before {
        content: '';

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
        opacity: 0;

        background-color: rgba(0, 0, 0, 0.3);
      }

      &:hover {
        .content,
        &::before {
          opacity: 1;
          transition: opacity 0.5s;
        }
      }
    }
  }

  .newletter {
    padding: 30px;
    font-size: 14px;

    background-color: #e7a8a8;
    span {
      text-transform: uppercase;
      font-size: 20px;
      letter-spacing: 5px;
      line-height: 55px;
    }

    input {
      &[type='email'] {
        width: 100%;
        padding: 15px;
        outline: none;
      }

      &[type='submit'] {
        width: 100%;
        height: 100%;
        padding: 15px;
      }
    }
  }
`;

export default HomeWrapper;
