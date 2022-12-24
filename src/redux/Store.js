import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import RootReducers from "./reducers/RootReducers";

const store = legacy_createStore(RootReducers, applyMiddleware(thunk));

export default store;
