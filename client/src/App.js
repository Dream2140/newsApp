import {RouterProvider} from "react-router-dom";
import router from "./router";
import Header from "./components/Header";
import React from "react";

function App() {
    return (
        <>
            <Header/>
            <RouterProvider router={router}/>
        </>
    )
        ;
}

export default App;
