import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItem = menu.filter(item => item.category === 'popular');

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center">
            {
                popularItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
    );
};

export default PopularMenu;