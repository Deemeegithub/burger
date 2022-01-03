import { connect } from "react-redux";
import css from './style.module.css';
import Toolbar from '../../components/Toolbar';
import BurgerPage from '../BurgerPage';
import SideBar from '../../components/SideBar';
import { Component } from 'react/cjs/react.production.min';
import OrderPage from '../OrderPage';
import { Route, Routes } from 'react-router-dom';
import ShippingPage from '../ShippingPage';
import LoginPage from '../LoginPage';
import Signup from '../SignupPage';
import Logout from '../../components/Logout';
import * as actions from "../../redux/actions/loginActions"
import * as actions2 from "../../redux/actions/signupActions"
class App extends Component {
  state = {
    showSideBar: false
  };
  toggleSideBar = () => {
    this.setState(umnuhstadeavchbaina => {
      return { showSideBar: !umnuhstadeavchbaina.showSideBar } // umnuhstadeavchbaina prevState gej nereldeg
    });
  }
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    const localId = localStorage.getItem('localId');
    const expireDate = new Date(localStorage.getItem('expireDate'));
    //const refreshToken = localStorage.getItem('refreshToken');

    if (token && localId) {
      if (expireDate > new Date()) {
        this.props.autoLogin(token, localId);
        this.props.autologout(expireDate.getTime() - new Date().getTime());
      } else {
        this.props.logout();

      }
    }
  }
  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar showSideBar={this.state.showSideBar} toggleSideBar={this.toggleSideBar} />
        <main className={css.Content}>
          {
            <Routes >
              this.props.localId ?
              (
              <Route path="/" element={<BurgerPage />} />
              <Route path="/orders" element={<OrderPage />} />
              <Route path="/ship/*" element={<ShippingPage />} />
              <Route path="/login" element={<LoginPage />} />
              ) : (
              <Route path="/signup" element={<Signup />} />
              <Route path="/logout" element={<Logout />} />
              )
            </Routes >
          }
        </main>
      </div>
    )
  };
}
const mapStateToPorps = state => {
  return {
    localId: state.signupLoginReducer.localId
  }
}
const mapDispachToProps = dispatch => {
  return {
    autoLogin: (token, localId) => dispatch(actions.loginUserSuccess(token, localId)),
    logout: () => dispatch(actions2.logout()),
    autologout: () => dispatch(actions2.autologout()),
  }
}
export default connect(mapStateToPorps, mapDispachToProps)(App);
