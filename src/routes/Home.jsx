import React, { useEffect } from 'react'
import Banner from "../images/pic1.jpg";
import Banner2 from "../images/pic2.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import  HomeItems  from "../components/HomeItems/HomeItems";
const Home = () => {


    return (
        <div className="home my-4">
            <div className="homeImageSlider">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={Banner} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Banner2} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="homeItems">
                <HomeItems />
            </div>
        </div>
    )
}

export default Home