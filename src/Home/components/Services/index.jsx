import React from "react";
import cls from "./Services.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import ServiceCard from "./ServiceCard";
import useWindowSize from "../../../../hooks/useWindowSize";

// install Swiper modules
SwiperCore.use([Navigation]);

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

// const services = [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 },
//   { id: 4 },
//   { id: 5 },
//   { id: 6 },
//   { id: 7 },
// ];

const renderDesktopSlides = (services) => {
  const slides = [];
  for (let i = 0; i < services.length; i += 2) {
    slides.push(
      <SwiperSlide key={services[i].id}>
        <ServiceCard data={services[i]} />

        {!!services[i + 1] && <ServiceCard data={services[i + 1]} />}
      </SwiperSlide>
    );
  }
  return slides;
};

const renderMobileSlides = (services) => {
  return services.map((service) => (
    <SwiperSlide key={service.id}>
      <ServiceCard data={service} />
    </SwiperSlide>
  ));
};

const Services = ({ services }) => {
  const windowSize = useWindowSize();

  return (
    <section className={[cls.Container, "section"].join(" ")} id={"services"}>
      <h2 className={"section__heading"}>Услуги</h2>
      <Swiper breakpoints={breakPoints} navigation={true} className="mySwiper">
        {windowSize > 828
          ? renderDesktopSlides(services)
          : renderMobileSlides(services)}
      </Swiper>
    </section>
  );
};

export default Services;
