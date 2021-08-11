import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';
import {formatDate} from "../../../../utils/utils";
import cls from './HeroSlider.module.scss';
import SwiperCore, {EffectCoverflow, Pagination} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export default function HeroSlider({on_main_slider}) {
  const {results} = on_main_slider;

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
        {
          !!results.length && results.map(({images, id, title}) => {
            return (
              <SwiperSlide key={id} className={cls.swiperSlide}>
                {({isActive}) => (
                  <>
                    <div
                      className={`${cls.swiperSlide__img}`}
                      style={{backgroundImage: `url(${images[0].image})`}}/>
                    {isActive && <div className={cls.swiperSlide__detail}>
                      <p className={`m-0`}>{formatDate(images[0].created)}</p>
                      <p className={`m-0`}>
                        {title.length > 20 ?
                          title.slice(0, 35) + '...' : title
                        }
                      </p>
                    </div>}
                  </>
                )}
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}
