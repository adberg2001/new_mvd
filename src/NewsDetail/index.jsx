import React from 'react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import cls from './NewsDetail.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import {formatDate} from "../../utils/utils";
SwiperCore.use([Navigation]);

//!!!props: category, id, images, title, on_main_slider, content, category
export default function NewsDetailComponent({
  created,
  news_type,
  title,
  images,
  content,
}) {

  return (
    <section className={`${cls.news_detail} container`}>
      <div
        className={`${cls.news_detail__head} d-flex justify-content-between`}
      >
        <p className={`m-0`}>{formatDate(created, 'string')}</p>
        <p className={`m-0`}>{news_type}</p>
      </div>

      <h2 style={{ textAlign: "start" }} className={`section__heading`}>
        {title}
      </h2>

      <div className={`${cls.news_detail__swiper_wrapper}`}>
        <Swiper navigation={true}>
          {images &&
            images.map(({ create, image }, i) => (
              <SwiperSlide key={`${i}-news-detail-slider-img`}>
                <div
                  style={{ backgroundImage: `url('${image}')` }}
                  className={cls.news_detail__swiper_img}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className={cls.news_detail__description} dangerouslySetInnerHTML={{__html: content}}/>
    </section>
  );
}
