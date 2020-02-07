import { connect } from 'react-redux'
import {
  incomingEmail,
  setselectedCheckBox,
  removeSelectedCheckBox,
  setStatusToMany,
  setShowModal,
  setCurrentTab, getAllUsers, writingText, sendEmail, setUserToWrite, setStatusAnswer, setStatusResend
} from '../../actions/actions'
import ModalEmail from "./ModalEmail";

let mapStateToProps = state => ({
  incomingEmails: state.incomingEmails,
  selectedCheckBox: state.selectedCheckBox,
  showModal: state.showModal,
  selectedEmailForModal: state.selectedEmailForModal,
  currentTab: state.currentTab,
  text: state.text,
  subject: state.subject,
  users: state.users,
  selectedUser: state.selectedUser,
  statusWrite: state.statusWrite
})

let mapDispatchToProps = dispatch => ({
  incomingEmail: () => dispatch(incomingEmail()),
  setselectedCheckBox: (id) => dispatch(setselectedCheckBox(id)),
  removeSelectedCheckBox: (id) => dispatch(removeSelectedCheckBox(id)),
  setStatusToMany: (id, action, currentTab) => dispatch(setStatusToMany(id, action, currentTab)),
  setShowModal: (status) => dispatch(setShowModal(status)),
  setCurrentTab: (tab) => dispatch(setCurrentTab(tab)),
  writingText: (text, field) => dispatch(writingText(text, field)),
  sendEmail: (whomSend, text, subject) => dispatch(sendEmail(whomSend, text, subject)),
  getAllUsers: () => dispatch(getAllUsers()),
  setStatusAnswer: () => dispatch(setStatusAnswer()),
  setStatusResend: (subject, text) => dispatch(setStatusResend(subject, text)),
  setUserToWrite: (user) => dispatch(setUserToWrite(user)),
})

const ModalEmailContainer = connect(mapStateToProps, mapDispatchToProps)(ModalEmail)

export default ModalEmailContainer