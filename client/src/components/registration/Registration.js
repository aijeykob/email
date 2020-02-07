import React, { Fragment } from 'react';
import {
  Redirect,
} from "react-router-dom";

const Registration = (props) => {

  const onChangeInput = (e) => {
    e.preventDefault();
    props.writingText(e.target.value, e.target.name)

  };
  const submitRegistration = () => {
    const user = {
      username: props.username,
      password: props.password
    };
    props.createUser(user)
  };

  return (
    <Fragment>
      {
        (props.statusRegistration == 201) ? <Redirect to='/Incoming' /> :
          <div>
            <div>Для доступа к функционалу нужна регистрация.</div>
            <input type='text' placeholder='enter name' name='username' onChange={(e) => onChangeInput(e)} required></input>
            <input type='password' placeholder='enter password' name='password' onChange={(e) => onChangeInput(e)} required></input>
            <button onClick={() => submitRegistration()}>Confirm</button>
            {
              (props.statusRegistration == 403) ? <div>Incorrect password</div> : null
            }
          </div>
      }
    </Fragment>
  )
}


export default Registration