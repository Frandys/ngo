import * as actionType from "./constant"
import { APICore } from "../../helps/apiCore";
import { setAuthorization } from "../../helps/apiCore";
const api = new APICore();


export const loginNgoActions = (params) => async (dispatch) => {
    dispatch({
        type: actionType.LOGIN_UP_LOADING
    })
    try {
        api.create(`api/v1/users/login`, params).then((success) => {
            dispatch({
                type: actionType.LOGIN_UP_SUCCESS,
                payload: success
            })
            const token = success?.data?.token
            setAuthorization(token)
            localStorage.setItem("token", token);

        }).catch((error) => {
            console.log(error, 'error')

        });
    } catch (error) {
        dispatch({
            type: actionType.LOGIN_UP_ERROR,
            payload: error
        })

    }

}



export const SignUpAction = (params) => async (dispatch) => {
    dispatch({
        type: actionType.SIGN_UP_LOADING,
        payload: {}
    })
    try {

        api.create(`api/v1/users/signup`, params).then((success) => {
            dispatch({
                type: actionType.SIGN_UP_SUCCESS,
                payload: success
            })
            dispatch({
                type: actionType.SIGN_UP_RESET,
                payload: {}
            })
        }).catch((error) => {
            dispatch({
                type: actionType.SIGN_UP_ERROR,
                payload: error
            })
            dispatch({
                type: actionType.SIGN_UP_RESET,
                payload: {}
            })

        });

    } catch (error) {
        dispatch({
            type: actionType.SIGN_UP_ERROR,
            payload: error
        })

    }
}


export const logOutAction = () => async (dispatch) => {
    localStorage.clear();
    try {
        dispatch({
            type: actionType.LOG_OUT_UP_SUCCESS,
            payload: {}
        })

    } catch (error) {

    }
}



