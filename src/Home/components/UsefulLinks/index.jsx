import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import cls from '../Services/Services.module.scss';
import { Card } from '@material-ui/core';
import Image from 'next/image';

const breakPoints = {
  400: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  828: {
    slidesPerView: 2,
    spaceBetween: 0,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
};

export default function UsefulLinks({ links }) {
  return (
    <section className={[cls.Container, 'section'].join(' ')}>
      <h2 className={'section__heading'}>Полезные ссылки</h2>

      <Swiper breakpoints={breakPoints} navigation={true} className="mySwiper">
        {links.map((link) => (
          <SwiperSlide key={link.id}>
            <Card className={cls.Card}>
              <a href={link.link} target="_blank" rel="noreferrer">
                <div className={'d-flex flex-column'}>
                  <div className="d-flex justify-content-center">
                    <Image
                      width={80}
                      height={80}
                      objectFit={'contain'}
                      src={link.logo}
                      alt={'service'}
                    />
                  </div>

                  <p className={'text-center'}>{link.name}</p>
                </div>
              </a>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
