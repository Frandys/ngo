import * as actionType from "../constant/constant"

const USERS_INITIAL_STATE = {
    users: [],
    loading: false
}

const USERS_LOGIN_INITIAL_STATE = {
    login: "",

}

export const loginReducer = (state = USERS_LOGIN_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.LOGIN_GET_USERS_SUCCESS:
            return {
                ...state,
                login: action.payload
            }
        default: return state
    }
}

export const userReducer = (state = USERS_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.GET_USERS_REQUEST:
            return {
                users: state.users,
                loading: true
            }
        case actionType.GET_USERS_SUCCESS:
            return {
                users: action.payload,
                loading: true
            }
        case actionType.GET_USERS_ERROR:
            return {
                users: action.payload,
                loading: true
            }
        case actionType.GET_USERS_RESET:
            return USERS_INITIAL_STATE;
        default: return state;
    }

}


