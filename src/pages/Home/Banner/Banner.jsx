import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./banner.css"

import img1 from "../../../assets/home/01.jpg"
import img2 from "../../../assets/home/02.jpg"
import img3 from "../../../assets/home/03.png"

const Banner = () => {


    return (
        <div>
            <Carousel 
                useKeyboardArrows={true} 
                showStatus={false} 
                showArrows={false}
                emulateTouch={true} 
                autoPlay={true} 
                infiniteLoop={true} 
                className='homePageSlider'
            >
                <div>
                    <img className='max-h-[400px] lg:max-h-[500px] object-cover' src={img1} alt='slide'/>
                </div>
                <div>
                    <img className='max-h-[400px] lg:max-h-[500px] object-cover' src={img2} alt='slide'/>
                </div>
                <div>
                    <img className='max-h-[400px] lg:max-h-[500px] object-cover' src={img3} alt='slide'/>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;