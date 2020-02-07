import { connect } from 'react-redux'
import {
  incomingEmail,
  setselectedCheckBox,
  removeSelectedCheckBox,
  setStatusToMany,
  setCurrentTab,
  emailFromSocket,
  checkCurrentUser,

} from '../../actions/actions'
import Incoming from "./Incoming";

let mapStateToProps = state => ({
  incomingEmails: state.incomingEmails,
  selectedCheckBox: state.selectedCheckBox,
  currentTab: state.currentTab,
  currentUser: state.currentUser
})
let mapDispatchToProps = dispatch => ({
  incomingEmail: () => dispatch(incomingEmail()),
  setselectedCheckBox: (id) => dispatch(setselectedCheckBox(id)),
  removeSelectedCheckBox: (id) => dispatch(removeSelectedCheckBox(id)),
  setStatusToMany: (id, action) => dispatch(setStatusToMany(id, action)),
  setCurrentTab: (tab) => dispatch(setCurrentTab(tab)),
  emailFromSocket: (res) => dispatch(emailFromSocket(res)),
  checkCurrentUser: () => dispatch(checkCurrentUser())

})

const IncomingContainer = connect(mapStateToProps, mapDispatchToProps)(Incoming)

export default IncomingContainer