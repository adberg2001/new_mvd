import React from "react";
import Hero from "./components/Hero";
import NewsListSection from "./components/NewsListSection";
import Rubrics from "./components/Rubrics";
import Footer from "../Layout/Footer";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <NewsListSection />
      <Services />
      <Rubrics />
      <Footer />
    </>
  );
}
