import React from "react";
import cls from "./Footer.module.scss";
import FooterNav from "./FooterNav";
import FooterHero from "./FooterHero";
import FooterContacts from "./FooterContacts";

export default function Footer() {
  return (
    <footer className={cls.footer}>
      <FooterNav />
      <div className={cls.footer__cont_wrapper}>
        <FooterHero />
        <FooterContacts />
      </div>
      <div className={cls.footer__copyright}>
        <p>
          Copyright © 2021 Информационный портал МВД КР. All Rights Reserved.
          Designed by ZettaSoft{" "}
        </p>
        <p>
          Все права защищены. При использовании материалов ссылка на сайт
          обязательна
        </p>
      </div>
    </footer>
  );
}
