/* eslint-disable react/prop-types */
import { FaGoogle } from "react-icons/fa";
import swal from "sweetalert";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AllContext } from "../../../Provider/Authprovider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const { googleSignInWithPopup } = useContext(AllContext);
    const axiosPublic = useAxiosPublic();

    const location = useLocation();
    const navigate = useNavigate()
   
    const handleUserSignInWithPopup = () => {

        googleSignInWithPopup()
            .then((succData) => {

                const userInfo = { name: succData?.user?.displayName, email: succData?.user?.email};
                axiosPublic.post('/store-users', userInfo)
                .then(res => {

                    if (res.data.insertedId){
                        swal({
                            text: `brand new user successfully login & store in the database`,
                            icon: "success",
                            buttons: false,
                        })
                        navigate(location?.state ? location?.state : '/dashboard');
                    } 
                    else {
                        swal({
                            text: `Login success | ${res.data.message}, so it's not store in the database`,
                            icon: "success",
                            buttons: false,
                        })
                        navigate(location?.state ? location?.state : '/dashboard');
                    }
                    
                })

            }).catch((errorData) => {

                swal({
                    text: errorData.message,
                    icon: "warning",
                    buttons: false,
                })

            });
    }

    return (
        <div className="flex justify-center items-center">
            <div className='mt-2 my-4 mx-1'>

                <button onClick={handleUserSignInWithPopup} className='flex items-center gap-2 py-2 border border-black rounded-lg text-sm font-medium my-3 px-4 min-w-[185px]'><span> <FaGoogle /> </span> <span>Login with Google compo</span> </button>

            </div>
        </div>
    );
};

export default SocialLogin;