import React, { Fragment, useEffect } from 'react';


import { Modal, Button } from "react-bootstrap";
import { Write } from "../write/Write";

const ModalEmail = (props) => {
  useEffect(() => {
    props.getAllUsers()
  }, []);

  const handleClose = () => {
    props.setShowModal(false)
  };

  const changeStatus = (e) => {
    props.setStatusToMany([props.selectedEmailForModal._id], e.target.name, props.currentTab)
  }
  const changeStatusAnswer = () => {
    props.setStatusAnswer()
  }
  const changeStatusResend = () => {
    props.setStatusResend(props.selectedEmailForModal.subject, props.selectedEmailForModal.text)
  }
  return (
    <Fragment>
      <Modal backdrop={false} show={props.showModal} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title> Тема: {props.selectedEmailForModal.subject}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>От кого: {props.selectedEmailForModal.whoSend}</div>
            <p>Текст: {props.selectedEmailForModal.text}</p>
          </div>
          <button name={'delete'} onClick={(e) => changeStatus(e)}>Удалить ?</button>
          <button name={'noDelete'} onClick={(e) => changeStatus(e)}>Восстановить?</button>
          <button name={'spam'} onClick={(e) => changeStatus(e)}>спам?</button>
          <button name={'noSpam'} onClick={(e) => changeStatus(e)}>Убрать из спама?</button>
          <button name={'read'} onClick={(e) => changeStatus(e)}>Отметить прочитанными ?</button>
          <button name={'unread'} onClick={(e) => changeStatus(e)}>Отметить  не прочитанными?</button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => changeStatusAnswer()} >Ответить</Button>
          <Button onClick={() => changeStatusResend()} >Переслать</Button>
          {
            (props.statusWrite == 'answer' || props.statusWrite == 'resend') ? <div> <Write /> </div> : null
          }
        </Modal.Footer>
      </Modal>

    </Fragment >
  )
}
export default ModalEmail