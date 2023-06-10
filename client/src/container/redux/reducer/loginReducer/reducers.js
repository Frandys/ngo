import * as actionTypes from "../../action/loginAction/types"

const SIGN_UP_INITIAL_STATE = {
    signUp: "",
    loading: false
}

const LOGIN_INITIAL_STATE = {
    login: "",
    loading: false
}
const LOG_OUT_INITIAL_STATE = {
    logOut: "",
    loading: false
}

const signUpReducers = (state = SIGN_UP_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SIGN_UP_LOADING:
            return {
                signUp: state.signUp,
                loading: true
            }
        case actionTypes.SIGN_UP_SUCCESS:

            return {
                signUp: action.payload,
                loading: false
            }
        case actionTypes.SIGN_UP_ERROR:

            return {
                signUp: action.payload,
                loading: false
            }
        // case actionTypes.SIGN_UP_RESET:
        //     return SIGN_UP_INITIAL_STATE
        case actionTypes.LOG_OUT_UP_SUCCESS:
            return SIGN_UP_INITIAL_STATE
        default: return state
    }
}

const loginReducers = (state = LOGIN_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_UP_LOADING:
            return {
                login: state.login,
                loading: true
            }
        case actionTypes.LOGIN_UP_SUCCESS:
            return {
                login: action.payload,
                loading: false
            }
        case actionTypes.LOGIN_UP_ERROR:
            return {
                login: action.payload,
                loading: false
            }
        // case actionTypes.LOGIN_UP_RESET:
        //     return LOGIN_INITIAL_STATE
        case actionTypes.LOG_OUT_UP_SUCCESS:
            return LOGIN_INITIAL_STATE
        default: return state
    }
}

const logOutReducers = (state = LOG_OUT_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOG_OUT_UP_LOADING:
            return {
                logOut: false,
                loading: true
            }
        case actionTypes.LOG_OUT_UP_SUCCESS:
            return {
                logOut: true,
                loading: false
            }
        case actionTypes.LOG_OUT_UP_ERROR:
            return {
                logOut: false,
                loading: false
            }

        default: return state
    }
}


export { signUpReducers, loginReducers, logOutReducers }