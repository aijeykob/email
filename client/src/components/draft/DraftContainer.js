import { connect } from 'react-redux'
import {
  initialDraft,
  setShowModalDraft,
  selectDraftForModalDraft,
  setCurrentTab,
  setselectedCheckBox,
  removeSelectedCheckBox

} from '../../actions/actions'
import Draft from "./Draft";


let mapStateToProps = state => ({
  draftLocal: state.draftLocal,
  currentTab: state.currentTab,
  selectedCheckBox: state.selectedCheckBox
})

let mapDispatchToProps = dispatch => ({
  initialDraft: (draft) => dispatch(initialDraft(draft)),
  selectDraftForModalDraft: (draft) => dispatch(selectDraftForModalDraft(draft)),
  setShowModalDraft: (status) => dispatch(setShowModalDraft(status)),
  setCurrentTab: (tab) => dispatch(setCurrentTab(tab)),
  setselectedCheckBox: (id) => dispatch(setselectedCheckBox(id)),
  removeSelectedCheckBox: (id) => dispatch(removeSelectedCheckBox(id)),
})

const DraftContainer = connect(mapStateToProps, mapDispatchToProps)(Draft)

export default DraftContainer