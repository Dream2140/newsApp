import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import CustomSnackbar from "./components/ui/CustomSnackbar";
import React from 'react';

function App() {
    return (
        <>
            <Header/>
            <div style={{marginTop: '80px'}}>
                <Outlet/>
            </div>
            <CustomSnackbar/>
        </>
    )
}

export default App;
