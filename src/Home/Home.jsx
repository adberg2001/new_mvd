import React from "react";
import Hero from "./components/Hero";
import NewsListSection from "./components/NewsListSection";
import Rubrics from "./components/Rubrics";
import Footer from "../Layout/Footer";
import Services from "./components/Services";
import TerritorySection from "./components/Territory";

export default function Home() {
  return (
    <>
      <Hero />
      <NewsListSection />
      <Services />
      <Rubrics />
      <TerritorySection />
      <Footer />
    </>
  );
}
