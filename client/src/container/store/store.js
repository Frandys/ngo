import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";



const intialState = {};
const middleware = [thunk];

const Store = createStore(rootReducer, intialState,
    applyMiddleware(...middleware)
)

export default Store