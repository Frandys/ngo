import * as actionType from "./constant"

const LOGIN_INITIAL_STATE = {
    loginData: [],
    loading: false,
    logOut: false
}

const SIGN_UP_INITIAL_STATE = {
    signUpData: [],
    loading: false
}

const VERIFY_EMAIL_INITIAL_STATE = {
     verifyEmailData: [],
    loading: false
}


const verifyEmailReducer = (state = VERIFY_EMAIL_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.VERIFY_EMAIL_LOADING:
            return {
                verifyEmailData: state.verifyEmailData,
                loading: true
            }
        case actionType.VERIFY_EMAIL_SUCCESS:
            return {
                verifyEmailData: action.payload,
                loading: false
            }
        case actionType.VERIFY_EMAIL_ERROR:
            return {
                verifyEmailData: action.payload,
                loading: false
            }
        default: return state

    }
}

const loginReducer = (state = LOGIN_INITIAL_STATE, action) => {
     switch (action.type) {
        case actionType.LOGIN_UP_LOADING:
            return {
                loginData: state.loginData,
                loading: true
            }
        case actionType.LOGIN_UP_SUCCESS:
            return {
                loginData: action.payload,
                loading: false
            }
            case actionType.LOGIN_UP_ERROR:
                return {
                    loginUpData: action.payload,
                    loading: false
                }
        case actionType.LOG_OUT_UP_ERROR:
            return {
                loginData: action.payload,
                loading: false
            }
        case actionType.LOG_OUT_UP_SUCCESS:
            return {
                logOut: true,
                loading: false
            } 
        default: return state
    }
}

const signUpReducer = (state = SIGN_UP_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.SIGN_UP_LOADING:
            return {
                signUpData: state.signUpData,
                loading: true
            }
        case actionType.SIGN_UP_SUCCESS:
            return {
                signUpData: action.payload,
                loading: false
            }
        case actionType.SIGN_UP_ERROR:
            return {
                signUpData: action.payload,
                loading: false
            }
        default: return state

    }
}

export { loginReducer, signUpReducer ,verifyEmailReducer}