import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'
import {
  writingText,
  getAllUsers,
  setUserToWrite,
  sendEmail,
  clearInputs,
  selectDraftForModalDraft,
  initialDraft
} from '../../actions/actions'
import DropdownWhomContainer from "../DropdownWhom/DropdownWhomContainer";


class Write extends Component {
  constructor(props) {
    super(props)
    props.getAllUsers();
  }

  componentWillUnmount = () => {
    const props = this.props;
    console.log(props.selectedEmailForModalDraft._id)

    if (props.selectedEmailForModalDraft._id !== undefined) {

      if (props.selectedEmailForModalDraft.whomSend == props.selectedUser && props.selectedEmailForModalDraft.text == props.text
        && props.selectedEmailForModalDraft.subject == props.subject) {
        props.clearInputs();
        props.selectDraftForModalDraft({});
        return
      } else {
        const temp = JSON.parse(localStorage.getItem("draft")) || [];
        temp.map(el => {
          if (el._id == props.selectedEmailForModalDraft._id) {
            el.whomSend = props.selectedUser
            el.subject = props.subject
            el.text = props.text
          } else {
            return el
          }
        })
        localStorage.setItem('draft', JSON.stringify(temp))
        props.clearInputs();
        props.selectDraftForModalDraft({});
        props.initialDraft(temp)
        return
      }

    }

    if (props.selectedEmailForModal._id == undefined) {

      if (props.text !== '' || props.subject !== '') {
        console.log('in')

        const temp = JSON.parse(localStorage.getItem("draft")) || [];
        const draft = {
          whoSend: props.currentUser,
          whomSend: props.selectedUser,
          subject: props.subject,
          text: props.text,
          _id: Date.now()
        }
        temp.push(draft)
        localStorage.setItem('draft', JSON.stringify(temp))
      }
    }

    props.clearInputs();
    props.selectDraftForModalDraft({});

  }

  writingText = (e) => {
    this.props.writingText(e.target.value, e.target.name)

  }
  sendEmail = () => {
    this.props.sendEmail(this.props.selectedUser, this.props.text, this.props.subject)

  }

  render() {
    const props = this.props
    return (
      <Fragment>
        <DropdownWhomContainer />
        <input onChange={(e) => this.writingText(e)} name='subject' value={props.subject} placeholder="Введите тему" ></input>
        <textarea onChange={(e) => this.writingText(e)} name='text' value={props.text} placeholder="Введите письмо" ></textarea>
        <button onClick={() => this.sendEmail()}>Send</button>
      </Fragment>

    )

  }
}


let mapStateToProps = state => ({
  text: state.text,
  subject: state.subject,
  users: state.users,
  selectedUser: state.selectedUser,
  currentUser: state.currentUser,
  currentTab: state.currentTab,
  selectedEmailForModalDraft: state.selectedEmailForModalDraft,
  draftLocal: state.draftLocal,
  selectedEmailForModal: state.selectedEmailForModal

})

let mapDispatchToProps = dispatch => ({
  writingText: (text, field) => dispatch(writingText(text, field)),
  sendEmail: (whomSend, text, subject) => dispatch(sendEmail(whomSend, text, subject)),
  getAllUsers: () => dispatch(getAllUsers()),
  clearInputs: () => dispatch(clearInputs()),
  setUserToWrite: (user) => dispatch(setUserToWrite(user)),
  selectDraftForModalDraft: (draft) => dispatch(selectDraftForModalDraft(draft)),
  initialDraft: (draft) => dispatch(initialDraft(draft)),
})


const WriteWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Write);

export { WriteWithRedux as Write }