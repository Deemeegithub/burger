import React, { useState } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { connect } from 'react-redux';
import * as actions from "../../redux/actions/loginActions";
import Spinner from "../../components/General/Spinner";
import { useNavigate } from "react-router-dom";
function Login(props) {
    const [state, setStates] = useState({ email: "", password: "", error: "" });

    const login = () => {
        props.login(state.email, state.password);
    }
    const changeEmail = (event) => {
        setStates({ ...state, email: event.target.value });
    }
    const changePassword = (event) => {
        setStates({ ...state, password: event.target.value });
    }
    const navigate = useNavigate();
    return <div className={css.Login}>
        {props.localId && navigate("/")}
        <input onChange={changeEmail} type="email" placeholder="И-Мэйл хаяг" />
        <input onChange={changePassword} type="password" placeholder="Нууц үг" />
        {props.logginIn && <Spinner />}
        {props.firebaseError && <div style={{ color: "red" }}>{props.firebaseError}</div>}
        <Button text="Нэвтрэх" btnType="Success" OnClickd={login} />
    </div>
}
const mapStateToPorps = state => {
    return {
        logginIn: state.signupLoginReducer.logginIn,
        firebaseError: state.signupLoginReducer.firebaseError,
        firebaseErrorCode: state.signupLoginReducer.firebaseErrorCode,
        idToken: state.signupLoginReducer.idToken,
        localId: state.signupLoginReducer.localId,


    }
}
const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(actions.loginUser(email, password))
    }
}
export default connect(mapStateToPorps, mapDispatchToProps)(Login);