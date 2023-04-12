import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import myReducer from "./myReducer";
import logger from "redux-logger";

const myStore = legacy_createStore(myReducer, applyMiddleware(logger, thunk));

export default myStore;
