import React, { Fragment, useEffect } from 'react';
import AccordionMessagesContainer from '../AccordionMessages/AccordionMessagesContainer'
import CheckBoxManagerContainer from '../CheckBoxManager/CheckBoxManagerContainer';

const Spam = (props) => {
  useEffect(() => {
    props.incomingSpam();
    props.setCurrentTab('spamEmails')
  }, []);

  return (
    <Fragment>
      <CheckBoxManagerContainer currentTab={"spamEmails"} />
      {
        props.spamEmails.map(el => {
          return (
            <AccordionMessagesContainer messages={el} currentTab={"spamEmails"} />
          )
        })
      }
    </Fragment >
  )
}


export default Spam