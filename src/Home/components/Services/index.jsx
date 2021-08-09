import React from "react";
import Grid from "@material-ui/core/Grid";
import { Card } from "@material-ui/core";
import Image from "next/image";
import cls from "./Services.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import ServiceCard from "./ServiceCard";

// install Swiper modules
SwiperCore.use([Navigation]);

const Services = () => {
  return (
    <section className={[cls.Container, "section"].join(" ")}>
      <h2 className={"section__heading"}>Услуги</h2>
      <Swiper navigation={true} className="mySwiper">
        <SwiperSlide>
          <Grid container justifyContent="center" spacing={3}>
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <ServiceCard key={item} />
            ))}
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container justifyContent="center" spacing={3}>
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <ServiceCard key={item} />
            ))}
          </Grid>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Services;
