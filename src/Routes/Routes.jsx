import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LogOut from "../pages/Logout/LogOut";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'shop',
                element: <Shop></Shop>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element: <Register></Register>
            },
            {
                path: 'logout',
                element: <PrivateRoute> <LogOut></LogOut> </PrivateRoute>
            }
        ]
    },
]);

export default router;
