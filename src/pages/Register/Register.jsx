
/*-----------------------------------

This form is using React hooks form for the field validation 

----------------------------------*/


/* eslint-disable no-useless-escape */
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { FaEye, FaEyeSlash, FaCheck } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
import loaderIcon from "../../assets/icon/loader.gif"

const Register = () => {
    const { registerUser, userUpdateOnSignUp, setUser } = useAuth();
    const [submitBtnLoader, setSubmitBtnLoader] = useState(false);

    const [showPass, setShowPass] = useState(true);
    const [showConfirmPass, setShowConfirmPass] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();

    const captchaRef = useRef(null);
    const [disableLogInBtn, setDisableLogInBtn] = useState(true);

    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {

        setSubmitBtnLoader(true);

        registerUser(data.email, data.password)
            .then((succData) => {

                const user = succData.user;

                userUpdateOnSignUp({ displayName: data.name, photoURL: data.photo_url, email: data.email })
                    .then(() => {
                        setUser({ displayName: data.name, photoURL: data.photo_url, email: data.email });

                        //store user to database
                        const userInfo = { name: data.name, email: data.email }
                        axiosPublic.post('/store-users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    swal({
                                        text: "Registration Success",
                                        icon: "success",
                                        buttons: false,
                                    })
                                    setSubmitBtnLoader(false);
                                }

                                console.log('user stored into database', res.data);

                                reset()
                                navigate(location?.state ? location?.state : '/dashboard/profile');

                            })
                        //store user to database end

                        console.log('profile data set')

                    }).catch((error) => {
                        console.log('profile data not set', error);
                        setSubmitBtnLoader(false);
                    });

                console.log('SignUp User created', user)

            })
            .catch((errorData) => {
                const error = errorData.message;

                swal({
                    text: errorData.message,
                    icon: "warning",
                    buttons: false,
                })

                console.log('SignUp error', error)
                setSubmitBtnLoader(false);
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
        <div className="px-5 py-10 lg:py-20 flex justify-center items-center">
            <div className="flex-1 max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-600 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-lg pb-8 font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)} >
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Your name
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your name"
                            />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com"
                            />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div>
                            <label
                                htmlFor="photo_url"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Profile Photo URL
                            </label>
                            <input
                                type="url"
                                {...register("photo_url", { required: true })}
                                name="photo_url"
                                id="photo_url"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Profile picture URL"
                            />
                            {errors.photo_url && <span className="text-red-500">This field is required</span>}
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
                                    {...register("password", {
                                        required: true,
                                        maxLength: 20,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\])/
                                    })}
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-9"
                                />
                                <span onClick={() => setShowPass(!showPass)} className="cursor-pointer p-1 absolute top-[10px] right-[10px]">
                                    {showPass ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                            {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-500">Password must be less than 20 characters!</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be more than 6 characters!</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-500">Password must be at least one capital letter & one special character!</span>}
                        </div>

                        <div>
                            <label
                                htmlFor="confirm_pass"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Confirm password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPass ? 'password' : 'text'}
                                    {...register("confirm_pass", { required: true })}
                                    name="confirm_pass"
                                    id="confirm_pass"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-9"
                                />
                                <span onClick={() => setShowConfirmPass(!showConfirmPass)} className="cursor-pointer p-1 absolute top-[10px] right-[10px]">
                                    {showConfirmPass ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                            {errors.confirm_pass && <span className="text-red-500"> Please confirm your password </span>}
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
                            />
                            <span onClick={handleValidateCaptcha} className={`${disableLogInBtn ? 'text-black' : 'text-green-500'} bg-[#0000000d] cursor-pointer p-2 rounded-full absolute top-2 right-2 text-xs`}>
                                <FaCheck />
                            </span>
                        </div>


                        <div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        {...register("terms", { required: true })}
                                        name="terms"
                                        aria-describedby="terms"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="terms"
                                        className="cursor-pointer font-light text-black dark:text-gray-300"
                                    >
                                        <span className="font-medium text-primary-600 dark:text-primary-500">I accept the </span>
                                        <a
                                            className="font-semibold text-primary-600 hover:underline dark:text-primary-500"
                                            href="#"
                                        >
                                            Terms and Conditions
                                        </a>
                                    </label>
                                </div>
                            </div>
                            {errors.terms && <span className="text-red-500">Please Accept Term And Conditions</span>}
                        </div>

                        <div className="relative">
                            <input
                                disabled={disableLogInBtn}
                                value="Create an account"
                                type="submit"
                                className={`${disableLogInBtn ? 'bg-[#0000003d]' : 'bg-[#000000]'} text-white cursor-pointer w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center border`}
                            />
                            {submitBtnLoader && <img src={loaderIcon} alt="Loader" className="w-5 absolute top-2 right-3" />}
                        </div>

                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account?{" "}
                            <Link
                                to={'/login'}
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >
                                Login here
                            </Link>
                        </p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>

        </div>
    );
};

export default Register;