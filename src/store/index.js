import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
    key: 'root',
    blacklist: ['news', 'commentsList', 'admin', 'snackbar'],
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export const persistedStore = persistStore(store);