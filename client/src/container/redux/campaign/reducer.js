import * as actionType from "./constant"

const CAMPAIGN_GET_INITIAL_STATE = {
    getCampaignData: [],
    loading: false
}

const getCampaignReducer = (state = CAMPAIGN_GET_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.CAMPAIGN_LOADING:
            return {
                getCampaignData: state.getCampaignData,
                loading: true
            }
        case actionType.CAMPAIGN_SUCCESS:
            return {
                getCampaignData: action.payload,
                loading: false
            }
        case actionType.CAMPAIGN_ERROR:
            return {
                getCampaignData: action.payload,
                loading: false
            }
        default: return state
    }
}

export { getCampaignReducer }