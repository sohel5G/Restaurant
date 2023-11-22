import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'https://restaurant-server-zeta.vercel.app'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { userlogOut } = useAuth();

    axiosSecure.interceptors.request.use(function (config) {

        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`;
        return config;

    }, function (error) {
        return Promise.reject(error);
    })


    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async function (error) {

        const status = error.response.status;

        if (status === 401 || status === 403) {

            await userlogOut();
            console.log('user logout by interceptor, error status code', status)
            navigate('/login');
        }

        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;
