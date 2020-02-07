import { connect } from 'react-redux'
import {
  incomingBasket,
  setCurrentTab
} from '../../actions/actions'
import Basket from "./Basket";


let mapStateToProps = state => ({
  basketEmails: state.basketEmails,
  currentTab: state.currentTab
})

let mapDispatchToProps = dispatch => ({
  incomingBasket: () => dispatch(incomingBasket()),
  setCurrentTab: (tab) => dispatch(setCurrentTab(tab))
})

const BasketContainer = connect(mapStateToProps, mapDispatchToProps)(Basket)

export default BasketContainer