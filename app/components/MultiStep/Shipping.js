import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Shipping = () => {
  const [rSelected, setRSelected] = useState(1);

  return (
    <ButtonGroup>
      <Button
        className="btn-item"
        color="light"
        onClick={() => setRSelected(1)}
        active={rSelected === 1}
      >
        VNPost
      </Button>
      <Button
        className="btn-item"
        color="light"
        onClick={() => setRSelected(2)}
        active={rSelected === 2}
      >
        Viettel Post
      </Button>
      <Button
        className="btn-item"
        color="light"
        onClick={() => setRSelected(3)}
        active={rSelected === 3}
      >
        J&T Express
      </Button>
    </ButtonGroup>
  );
};

export default Shipping;
