import axios from "axios";
export const WRITE_TEXT = "WRITE_TEXT";
export const STATUS_REGISTRATION = "STATUS_REGISTRATION";
export const SET_ALL_USERS = "SET_ALL_USERS";
export const SET_USER_TO_WRITE = "SET_USER_TO_WRITE";
export const SET_SENDED_EMAIL = "SET_SENDED_EMAIL";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const LOG_OUT = "LOG_OUT";
export const SET_INCOMING_EMAIL = "SET_INCOMING_EMAIL";
export const SET_SELECTED_CHECKBOX = "SET_SELECTED_CHECKBOX";
export const REMOVE_SELECTED_CHECKBOX = "REMOVE_SELECTED_CHECKBOX";
export const CLEAR_SELECTED_CHECKBOX = "CLEAR_SELECTED_CHECKBOX";
export const EMAIL_FROM_SOCKET = "EMAIL_FROM_SOCKET";
export const SET_SPAM_EMAIL = "SET_SPAM_EMAIL";
export const SET_BASKET_EMAIL = "SET_BASKET_EMAIL";
export const SET_UPDATED_EMAILS = "SET_UPDATED_EMAILS";
export const SET_SHOW_MODAL = "SET_SHOW_MODAL";
export const SET_SELECTED_EMAIL_FOR_MODAL = "SET_SELECTED_EMAIL_FOR_MODAL";
export const SET_CURRENT_TAB = "SET_CURRENT_TAB";
export const SET_STATUS_ANSWER = "SET_STATUS_ANSWER";
export const SET_STATUS_RESEND = "SET_STATUS_RESEND";
export const CLEAR_INPUTS = "CLEAR_INPUTS";
export const INITIAL_DRAFT = "INITIAL_DRAFT";
export const SET_SHOW_MODAL_DRAFT = "SET_SHOW_MODAL_DRAFT";
export const SELECT_DRAFT_FOR_MODAL_DRAFT = "SELECT_DRAFT_FOR_MODAL_DRAFT";
export const DELETE_DRAFT_TO_MANY = "DELETE_DRAFT_TO_MANY";


export const createUser = (user) => dispatch => {

  axios({
    method: 'post',
    url: '//localhost:4000/register',
    data: {
      user
    }

  }).then(res => {
    if (res.status == 201) {
      localStorage.setItem('token', res.data.token);
      dispatch(setCurrentUser(res.data.username))
      dispatch(statusRegistration(201))
    }
  })
    .catch(err => {
      console.dir(err)
      if (err.response.status == 403) {
        dispatch(statusRegistration(null))
      } else {
        console.log(err)
      }
    })
};


export const getAllUsers = () => dispatch => {

  axios({
    method: 'get',
    url: '//localhost:4000/allUsers',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }

  }).then(res => {
    dispatch(setAllUsers(res.data.users))
  })

};


export const sendEmail = (whomSend, text, subject) => dispatch => {

  axios({
    method: 'post',
    url: '//localhost:4000/sendEmail',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    },
    data: {
      whomSend: whomSend,
      text: text,
      subject: subject

    }

  })
    .then(res => {
      dispatch(clearInputs())
    })

};

export const setStatusToMany = (id, action, currentTab) => dispatch => {
  axios({
    method: 'put',
    url: '//localhost:4000/changeStatusToMany',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    },
    data: {
      id: id,
      action: action,
      currentTab: currentTab,
    }

  })
    .then(res => {
      if (res.status == 201) {
        dispatch(clearSelectedCheckBox(null));
        dispatch(setUpdatedEmails(res.data.updatedEmails, currentTab))
      }
    })
    .catch(err => {
      console.dir(err)
    })
};

export const sendedEmail = () => dispatch => {

  axios({
    method: 'get',
    url: '//localhost:4000/sendedEmail',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(res => {
      dispatch(setSendedEmail(res.data.sendedEmail))
    })

};


export const incomingEmail = () => dispatch => {

  axios({
    method: 'get',
    url: '//localhost:4000/incomingEmail',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(res => {
      dispatch(setIncomingEmail(res.data.incomingEmail))
    })

};

export const incomingSpam = () => dispatch => {

  axios({
    method: 'get',
    url: '//localhost:4000/incomingSpam',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(res => {
      dispatch(setSpamEmail(res.data.incomingSpam))
    })

};
export const incomingBasket = () => dispatch => {

  axios({
    method: 'get',
    url: '//localhost:4000/incomingBasket',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(res => {
      dispatch(setBasketEmail(res.data.incomingBasket))
    })

};

export const checkCurrentUser = () => dispatch => {

  axios({
    method: 'get',
    url: '//localhost:4000/checkCurrentUser',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
  })

    .then(res => {
      if (res.status == 200) {
        dispatch(setCurrentUser(res.data.user))
      }
    })
    .catch(err => {
      console.dir(err)
      if (err.response.status == 403) {
        dispatch(setCurrentUser(null))
      } else {
        console.log(err)
      }
    })
};

export const setUpdatedEmails = (res, field) => ({
  type: SET_UPDATED_EMAILS, payload: res, field
});

export const setselectedCheckBox = (id) => ({
  type: SET_SELECTED_CHECKBOX, payload: id
});
export const removeSelectedCheckBox = (id) => ({
  type: REMOVE_SELECTED_CHECKBOX, payload: id
});
export const clearSelectedCheckBox = (id) => ({
  type: CLEAR_SELECTED_CHECKBOX, payload: id
});

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER, payload: user
});

export const setSendedEmail = (email) => ({
  type: SET_SENDED_EMAIL, payload: email
});
export const setIncomingEmail = (email) => ({
  type: SET_INCOMING_EMAIL, payload: email
});
export const setSpamEmail = (email) => ({
  type: SET_SPAM_EMAIL, payload: email
});
export const setBasketEmail = (email) => ({
  type: SET_BASKET_EMAIL, payload: email
});

export const setAllUsers = (users) => ({
  type: SET_ALL_USERS, payload: users
});

export const setUserToWrite = (user) => ({
  type: SET_USER_TO_WRITE, payload: user
});

export const statusRegistration = (status) => ({
  type: STATUS_REGISTRATION, payload: status
});
export const writingText = (text, field) => ({

  type: WRITE_TEXT, payload: text, field
});

export const logOut = (text) => ({
  type: LOG_OUT, payload: text
});

export const emailFromSocket = (email) => ({
  type: EMAIL_FROM_SOCKET, payload: email
});

export const setShowModal = (status) => ({
  type: SET_SHOW_MODAL, payload: status
});

export const setSelectedEmailForModal = (message) => ({
  type: SET_SELECTED_EMAIL_FOR_MODAL, payload: message
});

export const setCurrentTab = (tab) => ({
  type: SET_CURRENT_TAB, payload: tab
});

export const setStatusAnswer = () => ({
  type: SET_STATUS_ANSWER,
});
export const setStatusResend = (subject, field) => ({
  type: SET_STATUS_RESEND, payload: subject, field
});


export const clearInputs = () => ({
  type: CLEAR_INPUTS,
});
export const initialDraft = (draft) => ({
  type: INITIAL_DRAFT, payload: draft
});

export const setShowModalDraft = (status) => ({
  type: SET_SHOW_MODAL_DRAFT, payload: status
});
export const selectDraftForModalDraft = (draft) => ({
  type: SELECT_DRAFT_FOR_MODAL_DRAFT, payload: draft
});
export const deleteDraftToMany = (arr) => ({
  type: DELETE_DRAFT_TO_MANY, payload: arr
});
