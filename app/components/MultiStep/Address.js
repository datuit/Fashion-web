import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const Address = () => (
  <div>
    <Form>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input
          type="text"
          name="address"
          id="exampleAddress"
          value="Hoang Dieu Street, Hai Chau, Da Nang"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePhone">Phone</Label>
        <Input
          type="tel"
          name="phone"
          id="examplePhone"
          value="+84 969000000"
        />
      </FormGroup>
    </Form>
  </div>
);

export default Address;
