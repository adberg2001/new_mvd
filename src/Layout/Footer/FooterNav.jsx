import React from "react";
import cls from "./Footer.module.scss";
import Image from "next/image";

export default function FooterNav(){
  return (
    <nav className='d-flex align-items-center flex-wrap justify-content-center'>
      <a href="#">Главная</a>
      <a href="#">Министерство</a>
      <a href="#">Для граждан</a>
      <a href="#">Услуги</a>
      <a href="#">Для СМИ</a>
      <a href="#">Госпрограмма</a>
      <a href="#">Контакты</a>
      <a href="#">Политика</a>
      <a href="#">Рус/Кыр</a>
      <div className={[
        cls.social_icons, 'd-flex', 'align-items-center', 'justify-content-between'
      ].join(" ")}>
        <a href="#">
          <Image src='/images/light-insta.svg' alt='light-insta.svg' width='25' height='25'/>
        </a>
        <a href="#">
          <Image src='/images/light_facebook.svg' alt='light_facebook.svg' width='25' height='25'/>
        </a>
        <a href="#">
          <Image src='/images/light_twitter.svg' alt='light_twitter.svg' width='25' height='25'/>
        </a>
        <a href="#">
          <Image src='/images/light_youtube.svg' alt='light_youtube.svg' width='25' height='25'/>
        </a>
      </div>
    </nav>
  )
}
