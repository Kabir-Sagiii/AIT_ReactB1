import { legacy_createStore, applyMiddleware } from "redux";
import myReducer from "./myReducer";
import logger from "redux-logger";

const myStore = legacy_createStore(myReducer, applyMiddleware(logger));

export default myStore;
