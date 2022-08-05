import React from "react";
import style from "./PopularCategory.module.css"

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const PopularCategory = (props) => {
    let slides = props.photos.map((photo) =>
        <SwiperSlide><img src={photo.img} alt={photo.name}/></SwiperSlide>)


    return (
        <div className={style.popular__category}>
            <h2>{props.title}</h2>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                >
                    {slides}
                </Swiper>
        </div>
    )
}

export default PopularCategory;