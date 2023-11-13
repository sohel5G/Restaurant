import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";


const Main = () => {
    return (

        <>

            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    {/* Navbar */}
                    <div className="bg-gray-50 dark:bg-gray-800 shadow">
                        <div className="navbar container mx-auto flex justify-between">

                            {/* Mobile menu Icon  */}
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="bg-black text-white py-2 px-3 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>


                            {/* Website Header Logo */}
                            <div>
                                <Link to={'/'} className="flex items-center">
                                    <strong> Website Logo</strong>
                                </Link>
                            </div>


                            {/* Navbar menu items  */}
                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal gap-2 header-menu">

                                    <li>
                                        <NavLink
                                            to={'/'}
                                            className="text-black font-semibold text-lg"
                                        >
                                            Home
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>


                            <div className="flex gap-4 items-center justify-center">
                                <Link to={'/dashboard/profile'}>
                                    <button
                                        type="button"
                                        className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                        id="user-menu-button"
                                        aria-expanded="false"
                                        data-dropdown-toggle="user-dropdown"
                                        data-dropdown-placement="bottom"
                                    >
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="w-9 h-9 rounded-full"
                                            src="https://picsum.photos/200"
                                            alt="user photo"
                                        />
                                    </button>
                                </Link>
                                <Link to={'/login'}>
                                    <button
                                        type="button"
                                        className="bg-black text-white py-2 px-3"
                                    >
                                        Log In
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* Page content Start here */}

                    <main className="container mx-auto px-3">
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </main>

                    {/* Page content End here */}

                </div>

                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-gray-50 dark:bg-gray-800 header-menu">
                        {/* Sidebar content here */}
                        <li>
                            <Link to={'/'} className="flex items-center">
                                <strong> Website Logo</strong>
                            </Link>
                        </li>

                        <li className="mt-7">
                            <NavLink
                                to={'/'}
                                className="text-black font-semibold text-lg"
                            >
                                Home
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>


        </>
    );
};

export default Main;