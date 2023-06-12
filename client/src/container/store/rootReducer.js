import { combineReducers } from "redux";

import { loginReducer, signUpReducer } from "../redux/auth/reducer";
import { getCampaignReducer } from "../redux/campaign/reducer";
import { getHomeCampaignReducer } from "../redux/home/reducer";
import { getDonationReducer } from "../redux/donaton/reducer";

export const rootReducer = combineReducers({
    loginReducer,
    signUpReducer,
    getCampaignReducer,
    getHomeCampaignReducer,
    getDonationReducer
});