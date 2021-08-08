import React from 'react';
import Hero from './components/Hero';
import NewsListSection from './components/NewsListSection';
import Rubrics from "./components/Rubrics";

export default function Home() {
  return (
    <>
      <Hero />
      <NewsListSection />
      <Rubrics />
    </>
  );
}
