
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useIsAdmin = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/users/isadmin/${user?.email}`);
            return response.data?.admin;
        }

    })

    return [isAdmin, isAdminLoading];
};

export default useIsAdmin;

