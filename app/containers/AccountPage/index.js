import React from 'react';
import { Container } from 'reactstrap';
import ImgLoadding from 'Components/ImgLoading';
import Breadcrumb from 'Components/Breadcrumb';
import TabCpn from 'Components/Tab';
import AccountPageWrapper from './account.style';

const AccountPage = () => {
  return (
    <Container>
      <AccountPageWrapper className="account-page">
        <Breadcrumb title />
        <TabCpn data={TabDefaultVar} center />
      </AccountPageWrapper>
    </Container>
  );
};

const TabDefaultVar = [
  {
    name: 'Orders',
    component: () => <h4>NONE</h4>,
  },
  {
    name: 'Messages',
    component: () => (
      <ImgLoadding
        className="img-fluid"
        src="http://cdn8.bigcommerce.com/s-9srn18to/product_images/uploaded_images/bt-ss18-m0111.jpg"
        alt="0"
      />
    ),
  },
  {
    name: 'Addresses',
    component: () => <h4>NONE</h4>,
  },
  {
    name: 'Wish Lists',
    component: () => <h4>NONE</h4>,
  },
  {
    name: 'Recently Viewed',
    component: () => <h4>NONE</h4>,
  },
  {
    name: 'Account Settings',
    component: () => <h4>NONE</h4>,
  },
  {
    name: 'Sign Out',
    component: () => <h4>NONE</h4>,
  },
];

export default AccountPage;
