import styled from 'styled-components';
import { respondAbove } from 'Style/mixin.style';

const MultiWrapper = styled.div`
  &.multisteps-form {
    .multisteps-form__progress {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      &-btn {
        position: relative;

        padding-top: 20px;
        outline: none;
        border: none;

        background: transparent;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          z-index: 1;
          transform: translateX(-50%);
          width: 15px;
          height: 15px;
          border: 2px solid #3498db;
          background-color: white;
          border-radius: 100%;
        }
        &:not(:first-child)::after {
          content: '';
          position: absolute;
          top: calc(14px / 2);
          right: 50%;
          width: 100%;
          height: 2px;
          background-color: #3498db;
          z-index: -1px;
        }
        &.active {
          &::before {
            border: 2px solid #34495e;
            background-color: #34495e;
          }
          &:not(:first-child)::after {
            background-color: #34495e;
          }
        }
      }
    }

    .multisteps-form__form {
      .multisteps-form__panel {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        opacity: 0;
        visibility: hidden;
        &[data-animation='scaleIn'] {
          transform: scale(0.9);
          transition: all 0.2s linear;
        }
        &.active {
          display: block;
          height: auto;
          opacity: 1;
          visibility: visible;
        }
        &[data-animation='scaleIn'].active {
          transform: scale(1.1);
          transition: all 0.2s linear;
        }
      }
    }
  }
`;

export const ShippingWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .btn-item {
    margin: 20px;
    padding: 20px;
    &.active {
      border: 2px solid #7f8c8d !important;
    }
  }
`;

export default MultiWrapper;
