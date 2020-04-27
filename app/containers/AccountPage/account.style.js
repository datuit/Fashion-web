import styled from 'styled-components';

const AccountPageWrapper = styled.div`
  &.account-page {
    .project-tab {
      padding: 10%;
      margin-top: -8%;

      #tabs {
        background: #007b5e;
        color: #eee;

        h6.section-title {
          color: #eee;
        }

        .nav-tabs .nav-item.show .nav-link {
          color: #34495e;
          background-color: transparent;
          border-color: transparent transparent #f3f3f3;
          border-bottom: 3px solid !important;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }

    .nav-tabs .nav-link.active {
      color: #34495e;
      background-color: transparent;
      border-color: transparent transparent #f3f3f3;
      border-bottom: 3px solid !important;
      font-size: 16px;
      font-weight: bold;
    }

    .project-tab .nav-link {
      border: 1px solid transparent;
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
      color: #34495e;
      font-size: 16px;
      font-weight: 600;
    }

    .nav-tabs .nav-link:hover {
      cursor: pointer;
      border: none;
    }

    .project-tab {
      thead {
        background: #f3f3f3;
        color: #333;
      }

      a {
        text-decoration: none;
        color: #333;
        font-weight: 600;
      }
    }
  }
`;

export default AccountPageWrapper;
