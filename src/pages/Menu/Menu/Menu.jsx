import Title from "../../Home/Title/Title";
import { Parallax } from 'react-parallax';
import topBanner from "../../../assets/menu/banner3.jpg"
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../shared/MenuItem/MenuItem";
import SkeletonMenuItem from "../../Skeleton/skeletonMenuItem";

const Menu = () => {

    const [menu, menuLoading] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <>
            <section className="container mx-auto px-4">
                <div className="text-white">
                    <Parallax
                        bgImage={topBanner}
                        bgImageAlt="bg image"
                        strength={-200}
                    >
                        <div className="bg-[#0000008c]">
                            <div style={{ height: '100px' }} />
                            <Title
                                title="OUR MENU"
                                subTitle="Would you like to try a dish?"

                            >
                            </Title>
                            <div style={{ height: '100px' }} />
                        </div>
                    </Parallax>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <Title
                    title="TODAY'S OFFER"
                    subTitle="---Don't miss---"
                >
                </Title>
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center">
                        {
                            menuLoading ?
                                <>
                                    <SkeletonMenuItem />
                                    <SkeletonMenuItem />
                                    <SkeletonMenuItem />
                                    <SkeletonMenuItem />
                                </> :
                                <>
                                    {
                                        offered.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                                    }
                                </>
                        }
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <Title
                    title="DESSERTS"
                    subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s"
                >
                </Title>
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center">
                        {
                            menuLoading ?
                                <>
                                    <SkeletonMenuItem />
                                    <SkeletonMenuItem />
                                    <SkeletonMenuItem />
                                    <SkeletonMenuItem />
                                </> :
                                <>
                                    {
                                        dessert.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                                    }
                                </>
                        }
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <Title
                    title="PIZZA"
                    subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s"
                >
                </Title>
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center">
                        {
                            menuLoading ?
                                <>
                                    <SkeletonMenuItem />
                                    <SkeletonMenuItem />
                                    <SkeletonMenuItem />
                                    <SkeletonMenuItem />
                                </> :
                                <>
                                    {
                                        pizza.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                                    }
                                </>
                        }
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <Title
                    title="SALADS"
                    subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s"
                >
                </Title>
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center">
                        {
                            menuLoading ?
                                <>
                                    <SkeletonMenuItem />
                                    <SkeletonMenuItem />
                                    <SkeletonMenuItem />
                                    <SkeletonMenuItem />
                                </> :
                                <>
                                    {
                                        salad.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                                    }
                                </>
                        }
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 pb-11">
                <Title
                    title="SOUPS"
                    subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s"
                >
                </Title>
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center">
                        {
                            menuLoading ?
                                <>
                                    <SkeletonMenuItem />
                                    <SkeletonMenuItem />
                                    <SkeletonMenuItem />
                                    <SkeletonMenuItem />
                                </> :
                                <>
                                    {
                                        soup.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                                    }
                                </>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;