import axios from "axios";

export const signupUser = (email, password) => {
    return function (dispatch) {
        dispatch(signupUserStart());
        const data = {
            email,
            password,
            returnSecureToken: true,
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVd_3F_YrXEj9xZYQpmc7hC3XomwVuMto', data)
            .then(result => {
                const token = result.data.idToken;
                const localId = result.data.localId;
                localStorage.setItem("token", token);
                localStorage.setItem("localId", localId);

                dispatch(signupUserSuccess(token, localId));
            }).catch(err => {
                dispatch(signupUserError(err));
            });
    };
};
export const signupUserStart = () => {
    return {
        type: "SIGNUP_USER_START"
    };
};
export const signupUserSuccess = (token, localId) => {
    return {
        type: "SIGNUP_USER_SUCCESS",
        token,
        localId
    };
};
export const signupUserError = (error) => {
    return {
        type: "SIGNUP_USER_ERROR",
        error
    };
};
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('localId');
    localStorage.removeItem('expireDate');
    localStorage.removeItem('refreshToken');
    return {
        type: "LOGOUT"
    }
}
export const autologout = (ms) => {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(logout());
        }, ms);
    }
}