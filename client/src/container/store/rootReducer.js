import { combineReducers } from "redux";

import { loginReducer, signUpReducer,verifyEmailReducer } from "../redux/auth/reducer";
import { getCampaignReducer, addCampaignReducer } from "../redux/campaign/reducer";
import { getHomeCampaignReducer } from "../redux/home/reducer";
import { getDonationReducer } from "../redux/donaton/reducer";

export const rootReducer = combineReducers({
    verifyEmailReducer,
    loginReducer,
    signUpReducer,
    getCampaignReducer,
    getHomeCampaignReducer,
    getDonationReducer,
    addCampaignReducer
});