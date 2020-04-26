import React, { Fragment } from 'react';
import classnames from 'classnames';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const ModalCpn = props => {
  const { buttonLabel, className, isModal, onToggle } = props;

  return (
    <Modal
      isOpen={isModal}
      toggle={onToggle}
      className={classnames(className, 'w-100 h-100 d-block')}
    >
      <ModalHeader className="border-0" toggle={onToggle} />
      <ModalBody>{props.children}</ModalBody>
    </Modal>
  );
};

export default ModalCpn;
