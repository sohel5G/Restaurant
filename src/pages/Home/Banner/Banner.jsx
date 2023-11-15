import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./banner.css"

import img1 from "../../../assets/home/01.jpg"
import img2 from "../../../assets/home/02.jpg"
import img3 from "../../../assets/home/03.png"
import img4 from "../../../assets/home/04.jpg"
import img5 from "../../../assets/home/05.png"
import img6 from "../../../assets/home/06.png"
import img7 from "../../../assets/home/banner.jpg"

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
                <div>
                    <img className='max-h-[400px] lg:max-h-[500px] object-cover' src={img4} alt='slide'/>
                </div>
                <div>
                    <img className='max-h-[400px] lg:max-h-[500px] object-cover' src={img5} alt='slide'/>
                </div>
                <div>
                    <img className='max-h-[400px] lg:max-h-[500px] object-cover' src={img6} alt='slide'/>
                </div>
                <div>
                    <img className='max-h-[400px] lg:max-h-[500px] object-cover' src={img7} alt='slide'/>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;