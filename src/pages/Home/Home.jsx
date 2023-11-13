import Banner from "./Banner/Banner";
import Slider2 from "./Slider/Slider2";
import PopularMenu from "./PopularMenu/PopularMenu";
import Title from "./Title/Title";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <>
            <section>
                <Banner></Banner>
            </section>
            <section className="container mx-auto px-4 pb-2">
                <Title></Title>
                <Slider2></Slider2>
            </section>
            <section className="container mx-auto px-4 pb-2">
                <Title></Title>
                <PopularMenu></PopularMenu>
                <div className="py-8 mt-10 text-center">
                    <button className="bg-black py-2 px-3 text-white">
                        View Full  Menu
                    </button>
                </div>
            </section>
            <section className="container mx-auto px-4 pb-16">
                <Title></Title>
                <Testimonials></Testimonials>
            </section>
        </>
    );
};

export default Home;

