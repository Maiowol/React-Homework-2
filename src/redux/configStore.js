import {createStore, combineReducers, applyMiddleware, compose  } from "redux";
import thunk from "redux-thunk";
import dic from "./modules/dic";

const middlewares = [thunk];

//Reducer 모음
const rootReducer = combineReducers({dic});
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;

