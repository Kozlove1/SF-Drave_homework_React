import * as React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "./Image";

// Import Swiper styles
import 'swiper/css';

import "../img/Rectangle.png";

function MySwiper() {
    return (
      <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><Image className={''} src={"img/Rectangle.png"} alt={'Прямоугольник'} /></SwiperSlide>
        <SwiperSlide><Image className={''} src={"img/Rectangle.png"} alt={'Прямоугольник'} /></SwiperSlide>
        <SwiperSlide><Image className={''} src={"img/Rectangle.png"} alt={'Прямоугольник'} /></SwiperSlide>
        <SwiperSlide><Image className={''} src={"img/Rectangle.png"} alt={'Прямоугольник'} /></SwiperSlide>

      </Swiper>
      </>
    );
  };

  export default MySwiper;
