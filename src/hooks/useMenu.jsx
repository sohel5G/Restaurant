import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const axiosPublic = useAxiosPublic();

    const { isPending: menuLoading, data: menu = [], refetch } = useQuery({
        queryKey: ['menuData'],
        queryFn: async () => {
            const response = await axiosPublic.get('/menus');
            return response.data;
        }

    })
    
    return [menu, menuLoading, refetch]
}
export default useMenu;

