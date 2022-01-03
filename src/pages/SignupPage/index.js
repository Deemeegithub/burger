import React, { useState } from "react";
import { connect } from "react-redux";

import Button from "../../components/General/Button";
import css from "./style.module.css";
import * as actions from "../../redux/actions/signupActions";
import Spinner from "../../components/General/Spinner";
import { useNavigate } from "react-router-dom";
function Signup(props) {
    const [state, setStates] = useState({ email: "", password1: "", password2: "", error: "" });

    const signup = () => {
        if (state.password1 === state.password2) {
            props.signupUser(state.email, state.password1);
        } else {
            setStates({ ...state, error: "Нууц үгнүүд хоорондоо таарахгүй байна!" })
        }
    }
    const changeEmail = (event) => {
        setStates({ ...state, email: event.target.value });
    }
    const changePassword1 = (event) => {

        setStates({ ...state, password1: event.target.value });
    }
    const changePassword2 = (event) => {
        setStates({ ...state, password2: event.target.value });
    }
    const navigate = useNavigate();
    return <div className={css.Signup}>
        {props.localId && navigate("/")}
        <div><span style={{ fontSize: "30px" }}><b>Бүртгэлийн форм</b></span></div>
        <div>Та өөрийн мэдээллээ оруулна уу</div>
        <input onChange={changeEmail} type="email" placeholder="И-Мэйл хаяг" />
        <input onChange={changePassword1} type="password" placeholder="Нууц үгээ оруулна уу" />
        <input onChange={changePassword2} type="password" placeholder="Нууц үгээ давтан оруулна уу" />
        {state.error && <div style={{ color: "red" }}>{state.error}</div>}
        {props.saving && <Spinner />}
        <Button text="Бүртгүүлэх" btnType="Success" OnClickd={signup} />
    </div>
}
const mapStateToPorps = state => {
    return {
        saving: state.signupLoginReducer.saving,
        firebaseError: state.signupLoginReducer.firebaseError,
        idToken: state.signupLoginReducer.idToken,
        localId: state.signupLoginReducer.localId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signupUser: (email, password) => dispatch(actions.signupUser(email, password))
    }
}
export default connect(mapStateToPorps, mapDispatchToProps)(Signup);