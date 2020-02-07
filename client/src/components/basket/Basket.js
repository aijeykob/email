import React, { Fragment, useEffect } from 'react';
import AccordionMessagesContainer from '../AccordionMessages/AccordionMessagesContainer'
import CheckBoxManagerContainer from '../CheckBoxManager/CheckBoxManagerContainer';


const Basket = (props) => {

  useEffect(() => {
    props.incomingBasket();
    props.setCurrentTab('basketEmails')
  }, []);

  return (
    <Fragment>
      <CheckBoxManagerContainer currentTab={"basketEmails"} />
      {
        props.basketEmails.map(el => {
          return (
            <div key={el._id}>
              <AccordionMessagesContainer messages={el} currentTab={"basketEmails"} />
            </div>
          )
        })
      }

    </Fragment >
  )
}


export default Basket