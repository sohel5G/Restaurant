import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useIsAdmin from "../hooks/useIsAdmin";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] = useIsAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <>
            <div className="h-screen flex justify-center items-center">
                <div className='text-center'>
                    <span className="loading loading-spinner loading-lg"></span>
                    <h1 className='py-9'>Maybe your internet is too slow, please <span onClick={() => window.location.reload()} className='text-red-400 underline cursor-pointer'>reload</span></h1>
                </div>
            </div>
        </>
    }

    return (
        <>
            {
                user && isAdmin ? children : <Navigate state={location.pathname} to={'/'}></Navigate>
            }
        </>
    );

};

export default AdminRoute;

AdminRoute.propTypes = {
    children: PropTypes.node
};
