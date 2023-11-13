import Title from "../Home/Title/Title";
import topBanner from "../../assets/shop/banner2.jpg";
import { Parallax } from "react-parallax";

const Shop = () => {
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

            <section>

            </section>
        </>
    );
};

export default Shop;