import Title from "../Home/Title/Title";
import topBanner from "../../assets/shop/banner2.jpg";
import { Parallax } from "react-parallax";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import Foodcard from "../shared/FoodCard/Foodcard";
import SkeletonFoodCard from "../Skeleton/SkeletonFoodCard";

const Shop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu, menuLoading] = useMenu()
    
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    
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
                                title="Our Shop"
                                subTitle="Would you like to try a dish?"

                            >
                            </Title>
                            <div style={{ height: '100px' }} />
                        </div>
                    </Parallax>
                </div>
            </section>

            <section className="container mx-auto px-4 py-20">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex justify-center">
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    <TabPanel>
                        {
                            menuLoading ? 
                            <> 
                                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
                                    <SkeletonFoodCard/>
                                    <SkeletonFoodCard/>
                                    <SkeletonFoodCard/>
                                    <SkeletonFoodCard/>
                                    <SkeletonFoodCard/>
                                    <SkeletonFoodCard/>
                                    <SkeletonFoodCard/>
                                    <SkeletonFoodCard/>
                                </div>
                            </> : 
                            <> 
                                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
                                    {
                                        salad.map(item => <Foodcard key={item._id} item={item}></Foodcard>)
                                    }
                                </div>
                            </>
                        }
                    </TabPanel>

                    <TabPanel>
                        {
                            menuLoading ?
                                <>
                                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                    </div>
                                </> :
                                <>
                                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
                                        {
                                            pizza.map(item => <Foodcard key={item._id} item={item}></Foodcard>)
                                        }
                                    </div>
                                </>
                        }
                    </TabPanel>
                    
                    <TabPanel>
                        {
                            menuLoading ?
                                <>
                                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                    </div>
                                </> :
                                <>
                                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
                                        {
                                            soup.map(item => <Foodcard key={item._id} item={item}></Foodcard>)
                                        }
                                    </div>
                                </>
                        }
                        
                    </TabPanel>

                    <TabPanel>
                        {
                            menuLoading ?
                                <>
                                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                    </div>
                                </> :
                                <>
                                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
                                        {
                                            dessert.map(item => <Foodcard key={item._id} item={item}></Foodcard>)
                                        }
                                    </div>
                                </>
                        }
                    </TabPanel>

                    <TabPanel>

                        {
                            menuLoading ?
                                <>
                                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                        <SkeletonFoodCard />
                                    </div>
                                </> :
                                <>
                                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
                                        {
                                            drinks.map(item => <Foodcard key={item._id} item={item}></Foodcard>)
                                        }
                                    </div>
                                </>
                        }
                    </TabPanel>
                </Tabs>
            </section>
        </>
    );
};

export default Shop;