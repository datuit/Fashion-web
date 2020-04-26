import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const RadioCpn = props => {
  const [rSelected, setRSelected] = useState(null);
  return (
    <ButtonGroup>
      <Button
        color="light"
        onClick={() => setRSelected(1)}
        active={rSelected === 1}
      >
        XS
      </Button>
      <Button
        color="light"
        onClick={() => setRSelected(2)}
        active={rSelected === 2}
      >
        S
      </Button>
      <Button
        color="light"
        onClick={() => setRSelected(3)}
        active={rSelected === 3}
      >
        M
      </Button>
    </ButtonGroup>
  );
};

export default RadioCpn;
