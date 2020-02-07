import { connect } from 'react-redux'
import {
  setselectedCheckBox,
  removeSelectedCheckBox,
  setStatusToMany,
  setShowModal,
  setSelectedEmailForModal
} from '../../actions/actions'
import AccordionMessages from "./AccordionMessages";


let mapStateToProps = state => ({
  selectedCheckBox: state.selectedCheckBox
});
let mapDispatchToProps = dispatch => ({
  setShowModal: (status) => dispatch(setShowModal(status)),
  setselectedCheckBox: (id) => dispatch(setselectedCheckBox(id)),
  removeSelectedCheckBox: (id) => dispatch(removeSelectedCheckBox(id)),
  setStatusToMany: (id, action, currentTab) => dispatch(setStatusToMany(id, action, currentTab)),
  setSelectedEmailForModal: (message) => dispatch(setSelectedEmailForModal(message))
})

const AccordionMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AccordionMessages)

export default AccordionMessagesContainer