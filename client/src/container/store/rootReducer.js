import { combineReducers } from "redux";

import { loginReducer, signUpReducer } from "../redux/auth/reducer";
import { getCampaignReducer } from "../redux/campaign/reducer";

export const rootReducer = combineReducers({
    loginReducer,
    signUpReducer,
    getCampaignReducer
});