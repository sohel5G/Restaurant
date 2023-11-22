import useAuth from "../../../hooks/useAuth";

const DashboardUser = () => {

    const {user} = useAuth()

    return (
        <div>
            <h1 className='text-3xl'>Welcome back {user?.displayName} </h1>
        </div>
    );
};

export default DashboardUser;