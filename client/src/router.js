import Home from "./pages/Home";
import Article from "./pages/Article";

const {createBrowserRouter} = require("react-router-dom");

const router = createBrowserRouter([{
        path: "/",
        element: <Home/>
    }, {
        path: "/article/:slug",
        element: <Article/>
    }]
);

export default router;
