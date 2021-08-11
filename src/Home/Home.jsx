import React from "react";
import Hero from "./components/Hero";
import NewsListSection from "./components/NewsListSection";
import Rubrics from "./components/Rubrics";
import Services from "./components/Services";
import TerritorySection from "./components/Territory";

//props: {on_main_slider}
export default function Home({ on_main_slider, services, initialRegion }) {
  return (
    <>
      <Hero on_main_slider={on_main_slider} />
      <NewsListSection />
      <Services services={services} />
      <Rubrics />
      <TerritorySection initialRegion={initialRegion} />
    </>
  );
}
