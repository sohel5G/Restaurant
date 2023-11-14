import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';

import 'swiper/css';
import 'swiper/css/navigation';
import './testimonials.css';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                // loop={true}
            >
                {
                    reviews?.map(review => <SwiperSlide key={review._id}>
                        <div className='w-4/5 lg:w-3/4 px-5'>
                            <div className='flex justify-center pb-3'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                            </div>
                            <p className='text-lg font-normal'> {review.details} </p>
                            <h2 className='text-xl font-semibold'>{review.name}</h2>
                        </div>
                    </SwiperSlide> )
                }
            </Swiper>
        </>
    );
};

export default Testimonials;