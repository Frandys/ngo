import * as actionType from "./constant"
import { APICore } from "../../helpers/apiCore";
const api = new APICore();


export const getHomeCampaignActions = (params) => async (dispatch) => {
    dispatch({
        type: actionType.GET_HOME_CAMPAIGN_LOADING
    })
    try {
        api.get(`/api/v1/campaign/get-compaigns`, params).then((success) => {
            console.log(success, 'home data')
            dispatch({
                type: actionType.GET_HOME_CAMPAIGN_SUCCESS,
                payload: success
            })
        }).catch((error) => {
            dispatch({
                type: actionType.GET_HOME_CAMPAIGN_ERROR,
                payload: error
            })
        })

    } catch (error) {
        dispatch({
            type: actionType.GET_HOME_CAMPAIGN_ERROR,
            payload: error
        })
    }

}


