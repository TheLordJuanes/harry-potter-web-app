import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css";
import {useEffect, useState} from "react";
import "../styles/swiper_style.css"
import PropTypes from "prop-types";

export default function Carousel({slides}) {

    const [images, setImages] = useState([{url: ""}]);

    useEffect(() => {
        setImages(slides);
    }, [slides]);

    return (
        <>
            <div className="swiper-container">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    speed={500}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                >
                    {
                        images.map((image, index) => {
                            return (
                                <SwiperSlide className="swiper-slide" key={index}>
                                    <img src={image.url} alt="image1"/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    )
}

Carousel.defaultProps = {
    slides: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string.isRequired
    }))
}

