import useAuth from "../../../hooks/useAuth";

const DashboardProfile = () => {

    const { user, userlogOut } = useAuth();

    const handleLogOut = () => {
        userlogOut()
            .then(() => {
                console.log(' Sign-out successful ')
            }).catch(() => {
                console.log('Logout : An error happened')
            });
    }

    return (
        <div className="flex justify-center items-center py-8 px-5 min-w-[400px]">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
                <div className="flex flex-col items-center justify-center py-10">
                    <img
                        className="w-20 h-20 mb-3 rounded-full shadow-lg"
                        src={user?.photoURL || 'https://picsum.photos/200'}
                        alt="Bonnie image"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {user?.displayName || "name not found"}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {user?.email || "Email not found"}
                    </span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <button
                            onClick={handleLogOut}
                            className="bg-black py-1 px-3 text-white"
                        >
                            Log out
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashboardProfile;