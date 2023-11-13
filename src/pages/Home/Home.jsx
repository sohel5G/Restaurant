import Banner from "./Banner/Banner";
import Slider2 from "./Slider/Slider2";
import PopularMenu from "./PopularMenu/PopularMenu";
import Title from "./Title/Title";
import Testimonials from "./Testimonials/Testimonials";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section>
                <Banner></Banner>
            </section>
            <section className="container mx-auto px-4 pb-2">
                <Title
                    title="Popular category"
                    subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, architecto!"
                >
                </Title>
                <Slider2></Slider2>
            </section>
            <section className="container mx-auto px-4 pb-2">
                <Title
                    title="Popular Menu"
                    subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, architecto!"
                >
                </Title>
                <PopularMenu></PopularMenu>
                <div className="py-8 mt-10 text-center">
                    <Link>
                        <button className="bg-black py-2 px-3 text-white">
                            View Full  Menu
                        </button>
                    </Link>
                </div>
            </section>
            <section className="container mx-auto px-4 pb-16">
                <Title
                    title="What our client say"
                    subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, architecto!"
                >
                </Title>
                <Testimonials></Testimonials>
            </section>
        </>
    );
};

export default Home;

