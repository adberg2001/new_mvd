import React from 'react';
import Image from 'next/image';
import cls from './Hero.module.scss';

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

        <p>МИНИСТЕРСТВО ВНУТРЕННИХ ДЕЛ КЫРГЫЗСКОЙ РЕСПУБЛИКИ</p>

        <h1>На службе народа</h1>

        <ul>
          <li>Дежурная часть - 102</li>
          <li>Для туристов - 200</li>
          <li>Телефон доверия - 300</li>
        </ul>
      </div>
    </div>
  );
}
