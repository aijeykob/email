import {
  WRITE_TEXT,
  STATUS_REGISTRATION,
  SET_ALL_USERS,
  SET_USER_TO_WRITE,
  SET_SENDED_EMAIL,
  SET_CURRENT_USER,
  LOG_OUT,
  SET_INCOMING_EMAIL,
  SET_SELECTED_CHECKBOX,
  REMOVE_SELECTED_CHECKBOX,
  EMAIL_FROM_SOCKET,
  SET_SPAM_EMAIL,
  SET_BASKET_EMAIL,
  CLEAR_SELECTED_CHECKBOX,
  SET_UPDATED_EMAILS,
  SET_SHOW_MODAL,
  SET_SELECTED_EMAIL_FOR_MODAL,
  SET_CURRENT_TAB,
  SET_STATUS_ANSWER,
  SET_STATUS_RESEND,
  CLEAR_INPUTS,
  INITIAL_DRAFT,
  SET_SHOW_MODAL_DRAFT,
  SELECT_DRAFT_FOR_MODAL_DRAFT,
  DELETE_DRAFT_TO_MANY

} from '../actions/actions';

const initState = {
  text: "",
  subject: "",
  username: null,
  password: null,
  statusRegistration: null,
  users: [],
  selectedUser: null,
  sendedEmails: [],
  currentUser: null,
  incomingEmails: [],
  basketEmails: [],
  spamEmails: [],
  selectedCheckBox: [],
  dataFromSocket: [],
  token: null,
  showModal: false,
  showModalDraft: false,
  selectedEmailForModal: {},
  selectedEmailForModalDraft: {},
  currentTab: null,
  statusWrite: null,
  draftLocal: []
};



export const reducer = (state = initState, { type, payload, field }) => {
  switch (type) {
    case SET_CURRENT_TAB:
      return {
        ...state,
        currentTab: payload
      };
    case DELETE_DRAFT_TO_MANY:
      return {
        ...state
      };
    case SELECT_DRAFT_FOR_MODAL_DRAFT:
      return {
        ...state,
        selectedEmailForModalDraft: payload,
        text: payload.text,
        selectedUser: payload.whomSend,
        subject: payload.subject
      };
    case SET_SHOW_MODAL_DRAFT:
      return {
        ...state,
        showModalDraft: payload
      };
    case INITIAL_DRAFT:
      return {
        ...state,
        draftLocal: payload
      };
    case CLEAR_INPUTS:
      return {
        ...state,
        selectedUser: null,
        subject: "",
        text: ""
      };
    case SET_STATUS_ANSWER:
      return {
        ...state,
        statusWrite: 'answer',
        selectedUser: null,
        subject: "",
        text: ""
      };
    case SET_STATUS_RESEND:
      return {
        ...state,
        statusWrite: 'resend',
        selectedUser: null,
        subject: payload,
        text: field

      };
    case EMAIL_FROM_SOCKET:
      return {
        ...state,
        incomingEmails: [...state.incomingEmails, payload.createEmail]
      };
    case SET_SHOW_MODAL:
      return {
        ...state,
        showModal: payload,
        statusWrite: null,
        text: '',
        subject: '',
        selectedUser: null
      };
    case SET_SELECTED_EMAIL_FOR_MODAL:
      return {
        ...state,
        selectedEmailForModal: payload
      };
    case SET_UPDATED_EMAILS:
      return {
        ...state,
        [field]: payload
      };
    case CLEAR_SELECTED_CHECKBOX:
      return {
        ...state,
        selectedCheckBox: []
      };
    case REMOVE_SELECTED_CHECKBOX:
      return {
        ...state,
        selectedCheckBox: [...state.selectedCheckBox.filter(item => item !== payload)]
      };
    case SET_SELECTED_CHECKBOX:
      return {
        ...state,
        selectedCheckBox: [...state.selectedCheckBox, payload]
      };
    case LOG_OUT:
      return {
        ...state,
        statusRegistration: null,
        currentUser: null,
        selectedUser: null,
        incomingEmails: [],
        sendedEmails: [],
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    case SET_SENDED_EMAIL:
      return {
        ...state,
        sendedEmails: payload
      };
    case SET_INCOMING_EMAIL:
      return {
        ...state,
        incomingEmails: payload
      };
    case SET_SPAM_EMAIL:
      return {
        ...state,
        spamEmails: payload
      };
    case SET_BASKET_EMAIL:
      return {
        ...state,
        basketEmails: payload
      };
    case SET_ALL_USERS:
      return {
        ...state,
        users: payload
      };
    case SET_USER_TO_WRITE:
      return {
        ...state,
        selectedUser: payload
      };
    case WRITE_TEXT:
      return {
        ...state,
        [field]: payload
      };
    case STATUS_REGISTRATION:
      return {
        ...state,
        statusRegistration: payload
      };
    default:
      return state
  }
};
