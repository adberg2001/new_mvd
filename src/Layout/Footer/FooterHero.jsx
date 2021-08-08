import React from "react";
import cls from './Footer.module.scss'
import Image from "next/image";

export default function FooterHero(){

  return (
    <div className={cls.footer__hero}>
      <Image
        src='/images/logo_mvd.svg'
        alt='logo_mvd.svg'
        width='150'
        height='150'/>
      <h3 className={`ms-5`}>
        МИНИСТЕРСТВО ВНУТРЕННИХ ДЕЛ <br/> КЫРГЫЗСКОЙ РЕСПУБЛИКИ
      </h3>
    </div>
  )
}
