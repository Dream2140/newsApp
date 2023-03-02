import ReactDOM from 'react-dom/client';
import './index.css';
import CssBaseline from "@mui/material/CssBaseline";
import {Provider} from "react-redux";
import {persistedStore, store} from './store';
import {PersistGate} from "redux-persist/integration/react";
import router from "./router";
import {RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistedStore}>
            <CssBaseline/>
            <RouterProvider router={router}/>
        </PersistGate>
    </Provider>
)


