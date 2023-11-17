import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import DashboardCart from "../pages/Dashboard/DashboardCart/DashboardCart";
import DashboardProfile from "../pages/Dashboard/DashboardProfile/DashboardProfile";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

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
            }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [

            //Admin routs
            {
                path:'all-users',
                element: <AllUsers></AllUsers>
            },

            // Admin routs





            

            // Customers routes 
            {
                path: '',
                element:<DashboardHome></DashboardHome>
            },
            {
                path:'cart',
                element:<DashboardCart></DashboardCart>
            },
            {
                path:'reservation',
                element: <Reservation></Reservation>
            },
            {
                path:'profile',
                element: <DashboardProfile></DashboardProfile>
            }
            // End Customers routes
        ]
    }
]);

export default router;
