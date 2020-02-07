import { connect } from 'react-redux'
import {
  setselectedCheckBox,
  removeSelectedCheckBox,
  setStatusToMany,
  setCurrentTab,
  deleteDraftToMany
} from '../../actions/actions'
import CheckBoxManager from "./CheckBoxManager";


let mapStateToProps = state => ({
  selectedCheckBox: state.selectedCheckBox,
  currentTab: state.currentTab
})

let mapDispatchToProps = dispatch => ({
  setselectedCheckBox: (id) => dispatch(setselectedCheckBox(id)),
  removeSelectedCheckBox: (id) => dispatch(removeSelectedCheckBox(id)),
  setStatusToMany: (id, action, currentTab) => dispatch(setStatusToMany(id, action, currentTab)),
  setCurrentTab: (tab) => dispatch(setCurrentTab(tab)),
  deleteDraftToMany: (arr) => dispatch(deleteDraftToMany(arr))
})

const CheckBoxManagerContainer = connect(mapStateToProps, mapDispatchToProps)(CheckBoxManager)

export default CheckBoxManagerContainer