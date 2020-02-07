import React, { Fragment, Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import { checkCurrentUser, logOut } from "./actions/actions";
import { connect } from "react-redux";
import { Write } from "./components/write/Write";
import IncomingContainer from "./components/incoming/IncomingContainer";
import SendedContainer from "./components/sended/SendedContainer";
import SpamContainer from "./components/spam/SpamContainer";
import DraftContainer from "./components/draft/DraftContainer";
import BasketContainer from "./components/basket/BasketContainer";
import ModalEmailContainer from './components/Modal/ModalEmailContainer';
import ModalDraftContainer from './components/Modal/ModalDraftContainer';
import RegistrationContainer from './components/registration/RegistrationContainer';

class App extends Component {
  constructor(props) {
    super(props)
    const { dispatch } = this.props;
    dispatch(checkCurrentUser())
  }
  LogOutButton = () => {
    const { dispatch } = this.props;
    localStorage.removeItem('token')
    dispatch(logOut())
  }
  render() {
    const { currentUser } = this.props;
    return (
      <Fragment>
        {
          (currentUser) ?
            <div>
              <p>Hello {this.props.currentUser}</p>
              <button onClick={() => this.LogOutButton()} >Logout</button>
              <NavLink to={"/Incoming"} >Входящие</NavLink>
              <Route path="/Incoming" render={() => <IncomingContainer />} />

              <NavLink to={"/Sended"} >Отправленные</NavLink>
              <Route path="/Sended" render={() => <SendedContainer />} />

              <NavLink to={"/Spam"} >Спам</NavLink>
              <Route path="/Spam" render={() => <SpamContainer />} />

              <NavLink to={"/Draft"} >Черновик</NavLink>
              <Route path="/Draft" render={() => <DraftContainer />} />

              <NavLink to={"/Basket"} >Корзина</NavLink>
              <Route path="/Basket" render={() => <BasketContainer />} />

              <NavLink to={"/Write"} onChange={() => console.log('change')} >Написать</NavLink>
              <Route path="/Write" render={() => <Write />} />
              <ModalEmailContainer />
              <ModalDraftContainer />
            </div>
            : <RegistrationContainer />
        }

      </Fragment>
    )
  };
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

const AppWithRedux = connect(
  mapStateToProps
)(App);

export { AppWithRedux as App }




















