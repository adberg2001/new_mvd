import React from "react";
import Image from "next/image";

import cls from "./Hero.module.scss";
import HeroSlider from "../HeroSlider";

export default function Hero({ on_main_slider }) {
  return (
    <div className={cls.Hero}>
      <div className={cls.HeroLinks}>
        <p>Мы в социальных сетях</p>
        <ul>
          <li>
            <a href="#">
              <Image
                width="25"
                height="25"
                alt="facebook-link"
                src="/images/links/facebook.svg"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                width="25"
                height="25"
                alt="twitter-link"
                src="/images/links/twitter.svg"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                width="25"
                height="25"
                alt="instagram-link"
                src="/images/links/instagram.svg"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                width="30"
                height="30"
                alt="youtube-link"
                src="/images/links/youtube.svg"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className={cls.HeroContent}>
        <Image
          src="/images/logo_mvd.svg"
          alt="MVD Logo"
          width="110"
          height="110"
        />

        <h1>МИНИСТЕРСТВО ВНУТРЕННИХ ДЕЛ КЫРГЫЗСКОЙ РЕСПУБЛИКИ</h1>

        <HeroSlider on_main_slider={on_main_slider} />
      </div>
    </div>
  );
}
