import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { todoReducer } from "./todo";

export const rootReducer = combineReducers({
    auth:authReducer,
    todo:todoReducer
});