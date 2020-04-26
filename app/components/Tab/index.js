import React, { useState } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';
import classnames from 'classnames';
import ImgLoadding from 'Components/ImgLoading';

const TabCpn = props => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames('text-uppercase', {
              active: activeTab === '1',
            })}
            onClick={() => {
              toggle('1');
            }}
          >
            Styling
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames('text-uppercase', {
              active: activeTab === '2',
            })}
            onClick={() => {
              toggle('2');
            }}
          >
            Sizing
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>NONE</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <ImgLoadding
                className="img-fluid"
                src="http://cdn8.bigcommerce.com/s-9srn18to/product_images/uploaded_images/bt-ss18-m0111.jpg"
                alt="0"
              />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default TabCpn;
