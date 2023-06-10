import * as actionType from "./types"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from '../../../firebase/firebase';

export const SignUpAction = (data) => async (dispatch) => {

    try {
        dispatch({
            type: actionType.SIGN_UP_LOADING,
            payload: {}
        })
        createUserWithEmailAndPassword(auth, data.email, data.password).then((res) => {
            dispatch({
                type: actionType.SIGN_UP_SUCCESS,
                payload: res
            })

        }).catch(erro => {
            dispatch({
                type: actionType.SIGN_UP_ERROR,
                payload: erro
            })
            dispatch({
                type: actionType.SIGN_UP_RESET,
                payload: {}
            })
        })

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

export const loginAction = (email, password) => async (dispatch) => {
    dispatch({
        type: actionType.LOGIN_UP_LOADING
    })
    try {
        signInWithEmailAndPassword(auth, `${email}`, `${password}`).then((res) => {
            // localStorage.setItem("accessToken", JSON.stringify(res?.user?.accessToken));
            localStorage.setItem("accessToken", res?.user?.accessToken);
            dispatch({
                type: actionType.LOGIN_UP_SUCCESS,
                payload: res
            })
        }).catch(erro => {
            dispatch({
                type: actionType.LOGIN_UP_ERROR,
                payload: erro.message
            })
        })
        dispatch({
            type: actionType.LOGIN_UP_RESET,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: actionType.LOGIN_UP_ERROR,
            payload: error
        })
        dispatch({
            type: actionType.LOGIN_UP_RESET,
            payload: {}
        })
    }
}

export const logOutAction = () => async (dispatch) => {
    signOut(auth).then(() => {
        localStorage.clear();
        dispatch({
            type: actionType.LOG_OUT_UP_SUCCESS,
        })
    }).catch((error) => {
        dispatch({
            type: actionType.LOG_OUT_UP_ERROR,
            payload: error
        })
    })

}

