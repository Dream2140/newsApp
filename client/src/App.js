import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import CustomSnackbar from "./components/ui/CustomSnackbar";

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
