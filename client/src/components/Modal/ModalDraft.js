import React, { Fragment, useEffect } from 'react';


import { Modal, Button } from "react-bootstrap";
import { Write } from "../write/Write";

const ModalDraft = (props) => {


  const handleClose = () => {
    props.setShowModalDraft(false)
  };

  return (
    <Fragment>
      <Modal backdrop={false} show={props.showModalDraft} onHide={() => handleClose()}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Write />
        </Modal.Body>
      </Modal>
    </Fragment >
  )
}
export default ModalDraft