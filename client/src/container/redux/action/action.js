import * as actionType from '../constant/constant'
import axios from "axios"
import { APICore } from '../../helps/apiCore'
const api = new APICore();


export const loginNgoActions = (params) => async (dispatch) => {


    try {
        dispatch({
            type: actionType.GET_USERS_REQUEST
        })
        const data = api.create(`api/v1/users/login`, params);
        console.log(data, 'api call')
        dispatch({
            type: actionType.GET_USERS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: actionType.GET_USERS_ERROR,
            payload: error
        })

    }

}


export const loginBtnAction = () => async (dispatch) => {
    dispatch({
        type: actionType.LOGIN_GET_USERS_SUCCESS,
        payload: true

    })

}