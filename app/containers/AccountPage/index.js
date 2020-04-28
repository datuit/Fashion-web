import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import classnames from 'classnames';
import { Container, Nav, NavItem, Row, Col } from 'reactstrap';
import ImgLoadding from 'Components/ImgLoading';
import Breadcrumb from 'Components/Breadcrumb';
import Spiner from 'Components/Spiner';
import AccountPageWrapper from './account.style';
const AccountPage = props => {
  const { match } = props;
  const { url } = match;
  return (
    <Container>
      <AccountPageWrapper className="account-page">
        <Breadcrumb title />
        <Nav tabs className="justify-content-center">
          {RoutesDefaultVar.map(route => (
            <NavItem key={route.path}>
              <Link
                to={`${url}/${route.path}`}
                className={classnames('nav-link text-uppercase', {
                  active: route.path === 'orders',
                })}
              >
                {route.path}
              </Link>
            </NavItem>
          ))}
        </Nav>
        <Switch>
          <Route path={url} exact>
            <Spiner />
            <Redirect to={`${url}/${RoutesDefaultVar[0].path}`} />
          </Route>
          {RoutesDefaultVar.map(route => (
            <Route path={`${url}/${route.path}`} key={route.path}>
              <Row>
                <Col sm="12">
                  <route.component />
                </Col>
              </Row>
            </Route>
          ))}
        </Switch>
      </AccountPageWrapper>
    </Container>
  );
};

const RoutesDefaultVar = [
  {
    path: 'orders',
    component: () => <h4>NONE</h4>,
  },
  {
    path: 'messages',
    component: () => (
      <ImgLoadding
        className="img-fluid"
        src="http://cdn8.bigcommerce.com/s-9srn18to/product_images/uploaded_images/bt-ss18-m0111.jpg"
        alt="0"
      />
    ),
  },
  {
    path: 'address',
    component: () => <h4>NONE</h4>,
  },
  {
    path: 'wishlist',
    component: () => <h4>NONE</h4>,
  },
  {
    path: 'recentlyviewed',
    component: () => <h4>NONE</h4>,
  },
  {
    path: 'setting',
    component: () => <h4>NONE</h4>,
  },
  {
    path: 'logout',
    component: () => <Redirect to="/logout" />,
  },
];

export default AccountPage;
