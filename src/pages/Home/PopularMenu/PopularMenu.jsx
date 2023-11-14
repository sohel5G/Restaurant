import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import SkeletonMenuItem from "../../Skeleton/skeletonMenuItem";

const PopularMenu = () => {
    const [menu, menuLoading] = useMenu();
    const popularItem = menu.filter(item => item.category === 'popular');

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center">
            {
                menuLoading ?
                    <>
                        <SkeletonMenuItem />
                        <SkeletonMenuItem />
                        <SkeletonMenuItem />
                        <SkeletonMenuItem />
                        <SkeletonMenuItem />
                        <SkeletonMenuItem />
                    </> :
                    <>
                        {
                            popularItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                    </>
            }
        </div>
    );
};

export default PopularMenu;