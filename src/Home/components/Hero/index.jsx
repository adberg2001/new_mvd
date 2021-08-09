import React from "react";
import Image from "next/image";

import cls from "./Hero.module.scss";
import HeroSlider from "../HeroSlider";

export default function Hero() {
  return (
    <div className={cls.Hero}>
      <div className={cls.HeroContent}>
        <Image
          src="/images/logo_mvd.svg"
          alt="MVD Logo"
          width="110"
          height="110"
        />

        <h1>МИНИСТЕРСТВО ВНУТРЕННИХ ДЕЛ КЫРГЫЗСКОЙ РЕСПУБЛИКИ</h1>

        <HeroSlider />

        {/* <ul>
          <li>Дежурная часть - 102</li>
          <li>Для туристов - 200</li>
          <li>Телефон доверия - 300</li>
        </ul> */}
      </div>
    </div>
  );
}
