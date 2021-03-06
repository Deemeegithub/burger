const initialState = {
    saving: false,
    logginIn: false,
    firebaseError: null,
    firebaseErrorCode: null,
    idToken: null,
    localId: null

}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_USER_START': return {
            ...state,
            saving: true
        };
        case 'SIGNUP_USER_SUCCESS': return {
            ...state,
            saving: false,
            idToken: action.token,
            localId: action.localId,
        };
        case 'SIGNUP_USER_ERROR': return {
            ...state,
            saving: false,
            firebaseError: action.error.response.data.error.message
        };
        case 'LOGIN_USER_START': return {
            ...state,
            logginIn: true,
        };
        case 'LOGIN_USER_SUCCESS': return {
            ...state,
            logginIn: false,
            idToken: action.token,
            localId: action.localId,
        };
        case 'LOGIN_USER_ERROR': return {
            ...state,
            logginIn: false,
            firebaseError: action.error.response.data.error.message,
            firebaseErrorCode: action.error.response.data.error.code
        };
        case 'LOGOUT': return {
            ...state,
            idToken: null,
            localId: null,
            firebaseError: null,
            firebaseErrorCode: null,
        }
        default: return state;
    }
}

export default reducer;