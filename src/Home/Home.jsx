import React from 'react';
import Hero from './components/Hero';
import NewsListSection from './components/NewsListSection';
import Rubrics from './components/Rubrics';
import Services from './components/Services';
import TerritorySection from './components/Territory';
import UsefulLinks from './components/UsefulLinks';

//props: {on_main_slider}
export default function Home({
  on_main_slider,
  last_news,
  initialRegion,
  services,
  links,
}) {
  return (
    <>
      <Hero on_main_slider={on_main_slider} />
      <NewsListSection last_news={last_news} />
      <Services services={services} />
      <Rubrics />
      <TerritorySection initialRegion={initialRegion} />
      <UsefulLinks links={links} />
    </>
  );
}
