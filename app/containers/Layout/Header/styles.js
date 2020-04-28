import styled from 'styled-components';
import { respondBelow, respondAbove } from 'Style/mixin.style';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  text-transform: uppercase;
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

      .btn ion-icon {
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
        position: relative;
        display: inline-block;
        width: 25px;
        height: 2px;
        background: black;
        &::after {
          content: '';
          position: absolute;
          bottom: 8px;
          width: 25px;
          height: 2px;
          background: black;
        }

        &::before {
          content: '';
          position: absolute;
          top: 8px;

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
    .logo {
      height: 50px;

      img {
        width: 70%;
      }
    }
  }

  .top-nav-right {
    font-size: 15px;
    li {
      margin-left: 15px;
      input.search-desktop {
        width: 90px;

        outline: none;
        border: none;
        border-bottom: 1px solid black;
      }
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
            position: absolute;
            top: 0;
            left: 100%;

            min-width: 18px;
            height: 18px;
            border-radius: 100%;

            text-align: center;
            font-size: 10px;
            line-height: 20px;

            color: white;
            background-color: black;
          }
        }
        > span {
          vertical-align: middle;
          font-weight: bold;
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
          transition: max-height 500ms cubic-bezier(0, 1, 0, 1);
        }
        &.active{
          overflow : hidden;
          max-height: 1000px !important;
          transition: max-height 500ms ;
        }
      `,
      )}
    }
    ${respondAbove(
      'md',
      `
      ul.navbar-nav {
        margin: 0 auto;
        text-align : center;
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
          bottom: -10px;
          left: 50%;
          display: none;
          transform: translateX(-50%);
        }

        .dropdown-menu {
          top: 100%;
          z-index: -1;
          border: none;
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

export const LanguageWrapper = styled.div`
  display: inline-block;
  position: absolute;
  right: 0;
  top: 100%;
  .btn.btn-secondary {
    padding: 0;
    transition: padding 300ms;
    &.active {
      padding: 5px 30px;
      transition: padding 300ms;
    }
  }
`;

export default HeaderWrapper;
