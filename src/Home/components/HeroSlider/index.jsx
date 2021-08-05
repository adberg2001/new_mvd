import React, { useRef, useState } from 'react';

import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

import cls from './HeroSlider.module.scss';

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export default function HeroSlider() {
  return (
    <div className={cls.heroSlider}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop
        speed={300}
        autoplay={{
          delay: 500,
        }}
        className={cls.swiperContainer}
      >
        <SwiperSlide className={cls.swiperSlide}>
          <Image
            width={380}
            height={320}
            src="/images/cardImg.png"
            alt="title"
          />
        </SwiperSlide>
        <SwiperSlide className={cls.swiperSlide}>
          <Image
            width={380}
            height={320}
            src="/images/cardImg.png"
            alt="title"
          />
        </SwiperSlide>
        <SwiperSlide className={cls.swiperSlide}>
          <Image
            width={380}
            height={320}
            src="/images/cardImg.png"
            alt="title"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
