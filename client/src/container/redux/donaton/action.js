import * as actionType from "./constant"
import { APICore } from "../../helps/apiCore";
const api = new APICore();


export const donationActions = (params) => async (dispatch) => {
    dispatch({
        type: actionType.DONATION_LOADING,
        payload: {}
    })
    try {
        api.create(`api/v1/donation/addDonation`,params).then((success) => {
            dispatch({
                type: actionType.DONATION_SUCCESS,
                payload: success
            })
        }).catch((error) => {
            dispatch({
                type: actionType.DONATION_ERROR,
                payload: error
            })
            
        });
    } catch (error) {
        dispatch({
            type: actionType.DONATION_ERROR,
            payload: error
        })
        
    }
}