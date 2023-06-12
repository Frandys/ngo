import * as actionType from "./constant"

const CAMPAIGN_GET_INITIAL_STATE = {
    getCampaignData: [],
    loading: false
}

const CAMPAIGN_ADD_INITIAL_STATE = {
    addCampaignData: [],
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

const addCampaignReducer = (state = CAMPAIGN_ADD_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.ADD_CAMPAIGN_LOADING:
            return {
                addCampaignData: state.addCampaignData,
                loading: true
            }
        case actionType.ADD_CAMPAIGN_SUCCESS:
            return {
                addCampaignData: action.payload,
                loading: false
            }
        case actionType.ADD_CAMPAIGN_ERROR:
            return {
                addCampaignData: action.payload,
                loading: false
            }
        case actionType.ADD_CAMPAIGN_RESET:
            return CAMPAIGN_GET_INITIAL_STATE
        default: return state
    }
}


export { getCampaignReducer, addCampaignReducer }