import React, { Fragment, useEffect } from 'react';


const Sended = (props) => {

  useEffect(() => {
    props.sendedEmail()
  }, [])

  return (
    <Fragment>

      {
        props.sendedEmails.map(el => {
          return (
            <div key={el._id}>
              <li>Тема:{el.subject}</li>
              <li>text:{el.text}</li>
              <div>Кому:{el.whomSend}</div>
            </div>
          )
        })
      }
    </Fragment>
  )
}


export default Sended