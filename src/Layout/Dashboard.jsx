import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaCartArrowDown, FaShoppingCart } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";

const Dashboard = () => {
    return (
        <>
            <div className="drawer lg:drawer-open container mx-auto gap-8 items-center">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content min-h-full flex-1 min-w-full">
                    <div className="py-5">
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg> Dashboard
                        </label>
                    </div>

                    {/* Content Start here */}
                    <div>
                        <Outlet></Outlet>
                    </div>

                    
                </div>
                <div className="drawer-side min-h-full">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full text-base-content bg-[#D1A054] z-50 pt-12">
                        {/* Sidebar content here */}
                        <li>
                            
                            <NavLink className="text-xl hover:text-white" to={'/dashboard'}><FaHome /> Dashboard</NavLink>
                        </li>
                        <li>
                            
                            <NavLink className="text-xl hover:text-white" to={'/dashboard/reservation'}><MdDateRange /> Reservation</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-xl hover:text-white" to={'/dashboard/cart'}><FaCartArrowDown /> My Cart</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-xl hover:text-white" to={'/dashboard/profile'}><HiUsers /> Profile</NavLink>
                        </li>
                        
                        <hr className="my-8" />

                        <li>
                            <NavLink className="text-xl hover:text-white" to={'/'}><FaHome /> Home</NavLink>
                        </li>
                        
                        <li>
                            <NavLink className="text-xl hover:text-white" to={'/menu'}><IoMdMenu /> Menu</NavLink>
                        </li>
                        
                        <li>
                            <NavLink className="text-xl hover:text-white" to={'/shop'}><FaShoppingCart /> Shop</NavLink>
                        </li>
                        
                        <li>
                            <NavLink className="text-xl hover:text-white" to={'/'}><MdEmail /> Contact</NavLink>
                        </li>
                        
                    </ul>

                </div>
            </div>

        </>
    );
};

export default Dashboard;