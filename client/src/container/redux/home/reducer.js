import * as actionType from "./constant"

const GET_HOME_CAMPAIGN_INITIAL_STATE = {
    getHomeCampaignData: [],
    loading: false
}

const getHomeCampaignReducer = (state = GET_HOME_CAMPAIGN_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.GET_HOME_CAMPAIGN_LOADING:
            return {
                getHomeCampaignData: state.getHomeCampaignData,
                loading: true
            }
        case actionType.GET_HOME_CAMPAIGN_SUCCESS:
            return {
                getHomeCampaignData: action.payload,
                loading: false
            }
        case actionType.GET_HOME_CAMPAIGN_ERROR:
            return {
                getHomeCampaignData: action.payload,
                loading: false
            }

        default: return state
    }
}

export { getHomeCampaignReducer }