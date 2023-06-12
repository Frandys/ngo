import * as actionType from "./constant"
import { APICore } from "../../helpers/apiCore";
const api = new APICore();


export const campaignActions = () => async (dispatch) => {
    dispatch({
        type: actionType.CAMPAIGN_LOADING,
        payload: {}
    })
    try {
        api.get(`api/v1/campaign`).then((success) => {
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

export const addCampaignActions = (data) => async (dispatch) => {
    dispatch({
        type: actionType.ADD_CAMPAIGN_LOADING,
        payload: {}
    })
    try {

        console.log(api);
        api.create(`api/v1/campaign`, data).then((success) => {
            dispatch({
                type: actionType.ADD_CAMPAIGN_SUCCESS,
                payload: success
            })
        }).catch((error) => {
            dispatch({
                type: actionType.ADD_CAMPAIGN_ERROR,
                payload: error
            })
        });
    } catch (error) {
        dispatch({
            type: actionType.ADD_CAMPAIGN_ERROR,
            payload: error
        })
    }
}