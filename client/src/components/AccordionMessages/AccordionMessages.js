import React, { Fragment } from 'react';
import { Accordion, Button, Card } from "react-bootstrap";

const AccordionMessages = (props) => {
  const choosenCheckbox = (e) => {
    const temp = props.selectedCheckBox.find(el => el == e.target.id);
    (temp) ? props.removeSelectedCheckBox(e.target.id) : props.setselectedCheckBox(e.target.id)
  }

  const selectEmailForModal = () => {
    const messages = props.messages
    props.setSelectedEmailForModal(messages)
    props.setShowModal(true);
    props.setStatusToMany([props.messages._id], 'read', props.currentTab)
  }
  return (
    <Fragment>
      <Accordion >
        <Card>
          <Card.Header>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" id={props.messages._id} onChange={(e) => choosenCheckbox(e)} checked={props.selectedCheckBox.includes(props.messages._id)} />
            </div>
            <Accordion.Toggle as={Button} variant="link" eventKey={props.messages._id}>
              {(props.messages.statusRead == 'false') ? <strong > От кого :  {props.messages.whoSend}</strong> : <div> От кого : {props.messages.whoSend}</div>}
            </Accordion.Toggle>
            <div id={props.messages._id} onClick={() => selectEmailForModal()}>
              {(props.messages.statusRead == 'false') ? <strong > Тема : {props.messages.subject}</strong> : <div> Тема : {props.messages.subject}</div>}  </div>
          </Card.Header>
          <Accordion.Collapse eventKey={props.messages._id}>
            <Card.Body>{(props.messages.statusRead == 'false') ? <strong > Текст : {props.messages.text}</strong> : <div> Текст : {props.messages.text}</div>}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

    </Fragment >
  )
}
export default AccordionMessages