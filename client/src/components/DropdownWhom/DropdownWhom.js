import React from 'react';
import { DropdownButton, Dropdown } from "react-bootstrap";

const DropdownWhom = (props) => {

  const chooseUserToWrite = (user) => {
    props.setUserToWrite(user)

  }
  return (
    <DropdownButton
      variant="success"
      title={props.selectedUser || "Кому"}
      id="dropdown-basic-button"
    >
      {
        (props.statusWrite == 'answer') ? props.users.map(el =>

          (el.username == props.selectedEmailForModal.whoSend) ?
            <Dropdown.Item className="dropdown-item" key={el._id}
              onClick={() => chooseUserToWrite(el.username)}> {el.username} </Dropdown.Item>
            :
            null
        )


          :


          props.users.map(el =>
            (props.statusWrite == 'resend' && el.username == props.selectedEmailForModal.whoSend) ?
              null
              :
              <Dropdown.Item className="dropdown-item" key={el._id}
                onClick={() => chooseUserToWrite(el.username)}> {el.username} </Dropdown.Item>
          )
      }
    </DropdownButton>
  )
}


export default DropdownWhom