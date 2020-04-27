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

const TabCpn = ({ data, center }) => {
  const [activeTab, setActiveTab] = useState(1);

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs className={classnames({ 'justify-content-center': center })}>
        {data.map((value, i) => (
          <NavItem key={value.name}>
            <NavLink
              className={classnames('text-uppercase', {
                active: activeTab === i,
              })}
              onClick={() => {
                toggle(i);
              }}
            >
              {value.name}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {data.map((value, i) => (
          <TabPane key={value.name} tabId={i}>
            <Row>
              <Col sm="12">
                <value.component />
              </Col>
            </Row>
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
};

export default TabCpn;
