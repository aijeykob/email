import { connect } from 'react-redux'
import {
  writingText,
  createUser
} from '../../actions/actions'
import Registration from "./Registration";


let mapStateToProps = state => ({
  username: state.username,
  password: state.password,
  statusRegistration: state.statusRegistration
})

let mapDispatchToProps = dispatch => ({
  writingText: (text, field) => dispatch(writingText(text, field)),
  createUser: (user) => dispatch(createUser(user)),

})

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration)

export default RegistrationContainer