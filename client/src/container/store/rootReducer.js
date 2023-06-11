import { combineReducers } from "redux";

import { loginReducer, signUpReducer } from "../redux/loginNdSign/reducer";

export const rootReducer = combineReducers({
    loginReducer,
    signUpReducer
});