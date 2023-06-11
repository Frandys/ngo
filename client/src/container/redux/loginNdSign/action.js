import * as actionType from "./constant"
import { APICore } from "../../helps/apiCore";
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

    try {
        dispatch({
            type: actionType.SIGN_UP_LOADING,
            payload: {}
        })
        const data = api.create(`api/v1/users/signup`, params);
        console.log(data, 'singppu ')
        // createUserWithEmailAndPassword(auth, data.email, data.password).then((res) => {
        //     dispatch({
        //         type: actionType.SIGN_UP_SUCCESS,
        //         payload: res
        //     })

        // }).catch(erro => {
        //     dispatch({
        //         type: actionType.SIGN_UP_ERROR,
        //         payload: erro
        //     })
        //     dispatch({
        //         type: actionType.SIGN_UP_RESET,
        //         payload: {}
        //     })
        // })

    } catch (error) {
        dispatch({
            type: actionType.SIGN_UP_ERROR,
            payload: error
        })
        dispatch({
            type: actionType.SIGN_UP_RESET,
            payload: {}
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



