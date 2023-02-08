import {combineReducers} from "redux";
import modalReducer from "./modalReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
    modal: modalReducer,
    user: userReducer
});
