import * as actionType from "./constant"
import { APICore } from "../../helps/apiCore";
const api = new APICore();


export const campaignActions = () => async (dispatch) => {
    dispatch({
        type: actionType.CAMPAIGN_LOADING,
        payload: {}
    })
    try {
        api.get(`/api/v1/campaign`).then((success) => {
            dispatch({
                type: actionType.CAMPAIGN_SUCCESS,
                payload: success
            })
        }).catch((error) => {
            dispatch({
                type: actionType.CAMPAIGN_ERROR,
                payload: error
            })
        });
    } catch (error) {
        dispatch({
            type: actionType.CAMPAIGN_ERROR,
            payload: error
        })
    }
}