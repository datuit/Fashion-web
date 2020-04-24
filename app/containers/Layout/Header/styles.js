import styled from 'styled-components';
import { respondBelow, respondAbove } from 'Style/mixin.style';

const HeaderWrapper = styled.header`
  text-transform: uppercase;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: #fff;
  ${respondBelow(
    'sm',
    `
  .top-nav {
      padding : 0 !important;
      line-height: 50px;
    }
    .top-nav-logo .logo img {
      width: 100%;
    }
    .top-nav-right li {
      margin-left: 10px;

      a ion-icon {
        font-size: 25px;
      }
    }
  `,
  )}
  .top-nav {
    padding: 14px;

    .top-nav-phone {
      line-height: 50px;
    }

    .top-nav-mobie-togle {
      display: inline-block;
      cursor: pointer;

      span {
        display: inline-block;
        position: relative;
        width: 25px;
        height: 2px;
        background: black;
        /* transform: rotate(0);
        transition: transform 0.5s; */
        &::after {
          content: '';
          bottom: 8px;
          position: absolute;
          width: 25px;
          height: 2px;
          background: black;
        }

        &::before {
          content: '';
          top: 8px;
          position: absolute;
          width: 25px;
          height: 2px;
          background: black;
        }
      }

      &:not(.active) span {
        &::after {
          bottom: 8px;
          transform: rotate(0);
          transition: transform 100ms, bottom 500ms;
        }

        &::before {
          top: 8px;
          transform: rotate(0);
          transition: transform 100ms, top 500ms;
        }
      }

      &.active span {
        background: transparent;
        &::after {
          bottom: 0;
          transform: rotate(-45deg);
          transition: transform 0.5s;
        }

        &::before {
          top: 0;
          transform: rotate(45deg);
          transition: transform 0.5s;
        }
      }
    }
  }

  .top-nav-logo {
    text-align: center;

    .logo {
      display: inline-block;
      height: 50px;

      img {
        width: 70%;
      }
    }
  }

  .top-nav-right {
    font-size: 15px;
    float: right;

    li {
      &:first-child input {
        width: 90px;
        outline: none;
        border: none;
        border-bottom: 1px solid black;
      }

      margin-left: 15px;

      a {
        text-decoration: none;
        padding: 6px;

        ion-icon {
          vertical-align: middle;
          font-size: 20px;
        }
        > div {
          position: relative;
          span.card-count {
            text-align: center;
            position: absolute;
            top: 0;
            left: 100%;
            min-width: 18px;
            height: 18px;
            color: white;
            font-size: 10px;
            line-height: 20px;
            border-radius: 100%;
            background-color: black;
          }
        }
        > span {
          font-weight: bold;
          vertical-align: middle;
        }
      }
    }
  }
`;

export const MenubarWrapper = styled.section`
  nav.navbar {
    .collapse.navbar-collapse.show {
      ${respondBelow(
        'md',
        `
        &:not(.active){
          max-height : 0 !important;
          overflow : hidden;
          transition: max-height 500ms !important;
        }
        &.active{
          overflow : hidden;
          max-height: 1000px !important;
          transition: max-height 500ms !important;
        }
      `,
      )}
    }
    ${respondAbove(
      'md',
      `
      ul.navbar-nav {
        text-align : center;
        margin: 0 auto;
      }

    `,
    )}
    .dropdown:hover div.dropdown-menu {
      display: block !important;
    }

    .dropdown-toggle::after {
      content: none;
    }
    ul.navbar-nav {
      li.dropdown {
        position: relative;
        z-index: 1;

        .nav-link {
          padding: 10px 25px;
        }

        ion-icon {
          position: absolute;
          display: none;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
        }

        .dropdown-menu {
          border: none;
          top: 100%;
          z-index: -1;
        }

        ${respondAbove(
          'md',
          `
      .dropdown:hover div.dropdown-menu {
        display: block !important;
      }
      &:hover {
          border-bottom: 1px solid black;

          ion-icon {
            display: inline-block;
          }
        }
    `,
        )}
      }
    }
  }
`;

export default HeaderWrapper;
