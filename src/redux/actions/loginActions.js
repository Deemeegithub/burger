import axios from "axios";
import * as actions from "./signupActions";
export const loginUser = (email, password) => {
    return function (dispatch) {
        dispatch(loginUserStart());
        const data = {
            email,
            password,
            returnSecureToken: true,
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCVd_3F_YrXEj9xZYQpmc7hC3XomwVuMto', data)
            .then(result => {
                const token = result.data.idToken;
                const localId = result.data.localId;
                const expiresIn = result.data.expiresIn;
                const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
                const refreshToken = result.data.refreshToken;
                localStorage.setItem("token", token);
                localStorage.setItem("localId", localId);
                localStorage.setItem("expireDate", expireDate);
                localStorage.setItem("refreshToken", refreshToken);
                dispatch(loginUserSuccess(token, localId));
                // dispatch(actions.autologout(expiresIn * 1000)); // 1000 үржүүлж байгаа нь мил секнд болгож байна
                dispatch(actions.autologout(5000)); // 1000 үржүүлж байгаа нь мил секнд болгож байна
            }).catch(err => {
                dispatch(loginUserError(err));
            });
    };
};
export const loginUserStart = () => {
    return {
        type: "LOGIN_USER_START"
    };
};
export const loginUserSuccess = (token, localId) => {
    return {
        type: "LOGIN_USER_SUCCESS",
        token,
        localId
    };
};
export const loginUserError = (error) => {
    return {
        type: "LOGIN_USER_ERROR",
        error
    };
};