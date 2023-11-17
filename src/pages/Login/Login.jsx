import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { FaEye, FaEyeSlash, FaCheck } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';
import SocialLogin from '../shared/SocialLogin/SocialLogin';

const Login = () => {
    const { userLogIn } = useAuth();
    const [showPass, setShowPass] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();

    const captchaRef = useRef(null);
    const [disableLogInBtn, setDisableLogInBtn] = useState(true);

    const handleUserLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogIn(email, password)
            .then((succData) => {
                const user = succData.user;
                user

                swal({
                    text: "Successfully Log In",
                    icon: "success",
                    buttons: false,
                })
                navigate(location?.state ? location?.state : '/dashboard');

            })
            .catch((errorData) => {
                const error = errorData.message;

                swal({
                    text: errorData.message,
                    icon: "warning",
                    buttons: false,
                })

                console.log('login error', error)
            });
    }


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleValidateCaptcha = () => {
        const captchaValue = captchaRef.current.value;
        if (validateCaptcha(captchaValue)) {
            setDisableLogInBtn(false)
        } else {
            setDisableLogInBtn(true)
        }
    }


    return (
        <>
            <div className="px-5 py-10 lg:py-20 flex justify-center items-center">
                <div className="flex-1 max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-600 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-lg pb-8 font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleUserLogin}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required=""
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPass ? 'password' : 'text'}
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                    <span onClick={() => setShowPass(!showPass)} className="cursor-pointer p-1 absolute top-[10px] right-[10px]">
                                        {showPass ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                            </div>

                            <div>
                                <LoadCanvasTemplate />
                            </div>
                            <div className='!mt-0 relative'>
                                <input
                                    type="text"
                                    ref={captchaRef}
                                    name="captcha"
                                    placeholder="Type the text above"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-10"
                                    required
                                />
                                <span onClick={handleValidateCaptcha} className={`${disableLogInBtn ? 'text-black' : 'text-green-500'} bg-[#0000000d] cursor-pointer p-2 rounded-full absolute top-2 right-2 text-xs`}>
                                    <FaCheck />
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            required=""
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="remember"
                                            className="text-gray-500 dark:text-gray-300"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Forgot password?
                                </a>
                            </div>

                            <div>
                                <input
                                    disabled={disableLogInBtn}
                                    value="Sign in"
                                    type="submit"
                                    className={`${disableLogInBtn ? 'bg-[#0000003d]' : 'bg-[#000000]'} text-white cursor-pointer w-full  font-medium rounded-lg text-sm px-5 py-2.5 text-center border`}
                                />
                            </div>

                            <p className=" text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{" "}
                                <Link
                                    to={'/register'}
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;