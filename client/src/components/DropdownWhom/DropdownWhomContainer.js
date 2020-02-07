import { connect } from 'react-redux'
import { setUserToWrite } from '../../actions/actions'
import DropdownWhom from "./DropdownWhom";


let mapStateToProps = state => ({
  users: state.users,
  selectedUser: state.selectedUser,
  selectedEmailForModal: state.selectedEmailForModal,
  statusWrite: state.statusWrite
})

let mapDispatchToProps = dispatch => ({
  setUserToWrite: (user) => dispatch(setUserToWrite(user))
})

const DropdownWhomContainer = connect(mapStateToProps, mapDispatchToProps)(DropdownWhom)

export default DropdownWhomContainer