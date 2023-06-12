import { combineReducers } from "redux";

import { loginReducer, signUpReducer } from "../redux/loginNdSign/reducer";
import { getCampaignReducer } from "../redux/campaign/reducer";
import { getHomeCampaignReducer } from "../redux/home/reducer";

export const rootReducer = combineReducers({
    loginReducer,
    signUpReducer,
    getCampaignReducer,
    getHomeCampaignReducer
});