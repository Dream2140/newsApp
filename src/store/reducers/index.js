import {combineReducers} from "redux";
import modalReducer from "./modalReducer";
import userReducer from "./userReducer";
import commentReducer from "./commentReducer";
import {newsReducer} from "./newsReducer";
import {profileReducer} from "./profileReducer";
import {adminReducer} from "./adminReducer";
import {snackbarReducer} from "./snackbarReducer";

export const rootReducer = combineReducers({
    modal: modalReducer,
    user: userReducer,
    commentsList: commentReducer,
    news: newsReducer,
    profile: profileReducer,
    admin: adminReducer,
    snackbar: snackbarReducer
});
