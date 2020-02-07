import { connect } from 'react-redux'
import {
  sendedEmail
} from '../../actions/actions'
import Sended from "./Sended";


let mapStateToProps = state => ({
  sendedEmails: state.sendedEmails
})

let mapDispatchToProps = dispatch => ({
  sendedEmail: () => dispatch(sendedEmail())
})

const SendedContainer = connect(mapStateToProps, mapDispatchToProps)(Sended)

export default SendedContainer