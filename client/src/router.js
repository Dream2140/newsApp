import Home from "./pages/Home";
import Article from "./pages/Article";
import Profile from "./pages/Profile";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";

import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin";

const {createBrowserRouter} = require("react-router-dom");

const router = createBrowserRouter([
    {
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,

            }, {
                path: "/article/:slug",
                element: <Article/>
            }, {
                path: "/profile",
                element: <ProtectedRoute userRole="USER" element={<Profile/>}/>,
            },
            {
                path: "/admin",
                element: <ProtectedRoute userRole="ADMIN" element={<Admin/>}/>
            },
            {
                path: "*",
                element: <Home/>
            },
        ]
    }],
);

export default router;
