import React, { Fragment, useEffect } from 'react';
import AccordionMessagesContainer from '../AccordionMessages/AccordionMessagesContainer'
import CheckBoxManagerContainer from '../CheckBoxManager/CheckBoxManagerContainer';
import io from "socket.io-client";
let socket;
const Incoming = (props) => {


  useEffect(() => {
    props.incomingEmail();
    props.setCurrentTab('incomingEmails')
    if (props.currentUser !== null && props.currentUser !== undefined && props.currentUser !== 403) {
      socket = io.connect("http://localhost:4000", { query: `token=${localStorage.getItem("token")}` }
      );
      socket.on('newMessage', (res) => {
        props.emailFromSocket(res)
      });
    }
  }, []);

  return (
    <Fragment>
      <CheckBoxManagerContainer currentTab={"incomingEmails"} />
      {
        props.incomingEmails.map(el => {
          return (
            <div key={el._id}>
              <AccordionMessagesContainer messages={el} currentTab={"incomingEmails"} />
            </div>
          )
        })
      }

    </Fragment >
  )
}
export default Incoming