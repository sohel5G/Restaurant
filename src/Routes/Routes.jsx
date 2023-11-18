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
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import DashboardAdmin from "../pages/Dashboard/DashboardAdmin/DashboardAdmin";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";
import ManageBooking from "../pages/Dashboard/ManageBooking/ManageBooking";
import AdminRoute from "../PrivateRoute/AdminRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },



    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [


            //Admin use routs
            {
                path: 'admin',
                element: <AdminRoute> <DashboardAdmin></DashboardAdmin> </AdminRoute>
            },
            {
                path: 'add-item',
                element: <AdminRoute> <AddItem></AddItem> </AdminRoute>
            },
            {
                path: 'manage-item',
                element: <AdminRoute> <ManageItem></ManageItem> </AdminRoute>
            },
            {
                path: 'manage-booking',
                element: <AdminRoute> <ManageBooking></ManageBooking> </AdminRoute>
            },
            {
                path: 'all-users',
                element: <AdminRoute> <AllUsers></AllUsers> </AdminRoute>
            },
            // Admin use routs end







            // Client use routes 
            {
                path: 'client',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },
            // End Client use routes end







            // Client and Admin both use routes

            {
                path: 'cart',
                element: <DashboardCart></DashboardCart>
            },
            {
                path: 'profile',
                element: <DashboardProfile></DashboardProfile>
            }
            // Client and Admin both use routes End



        ]
    }
]);

export default router;
