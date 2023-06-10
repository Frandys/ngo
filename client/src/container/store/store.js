import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer, loginReducer } from "../redux/reducer/reducer";
import { signUpReducers, loginReducers, logOutReducers } from "../redux/reducer/loginReducer/reducers";

const rootReducer = combineReducers({
    userList: userReducer,
    login: loginReducer,
    signUpReducers,
    loginReducers,
    logOutReducers

});

const intialState = {};
const middleware = [thunk];

const Store = createStore(rootReducer, intialState,
    applyMiddleware(...middleware)
)

export default Store