import { connect } from 'react-redux'
import {
  incomingSpam,
  setCurrentTab
} from '../../actions/actions'
import Spam from "./Spam";


let mapStateToProps = state => ({
  spamEmails: state.spamEmails,
  currentTab: state.currentTab
})

let mapDispatchToProps = dispatch => ({
  incomingSpam: () => dispatch(incomingSpam()),
  setCurrentTab: (tab) => dispatch(setCurrentTab(tab))
})

const SpamContainer = connect(mapStateToProps, mapDispatchToProps)(Spam)

export default SpamContainer