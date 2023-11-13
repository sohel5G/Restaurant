import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider2.css';

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"


const Slider2 = () => {


    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
                loop={true}
                autoplay={{
                    delay: 2500
                }}
                breakpoints={{
                    425: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
            >
                <SwiperSlide>
                    <img src={slide1} alt="Slider IMage" />
                    <h2 className='absolute bottom-2 lef-mask-half-1 text-2xl font-semibold text-white'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="Slider IMage" />
                    <h2 className='absolute bottom-2 lef-mask-half-1 text-2xl font-semibold text-white'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="Slider IMage" />
                    <h2 className='absolute bottom-2 lef-mask-half-1 text-2xl font-semibold text-white'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="Slider IMage" />
                    <h2 className='absolute bottom-2 lef-mask-half-1 text-2xl font-semibold text-white'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="Slider IMage" />
                    <h2 className='absolute bottom-2 lef-mask-half-1 text-2xl font-semibold text-white'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="Slider IMage" />
                    <h2 className='absolute bottom-2 lef-mask-half-1 text-2xl font-semibold text-white'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="Slider IMage" />
                    <h2 className='absolute bottom-2 lef-mask-half-1 text-2xl font-semibold text-white'>Salads</h2>
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default Slider2;