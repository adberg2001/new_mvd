import React from "react";
import cls from "./Footer.module.scss";
import Image from "next/image";
import { Typography } from "@material-ui/core";

export default function FooterHero() {
  return (
    <div className={cls.footer__hero}>
      <Image
        src="/images/logo_mvd.svg"
        alt="logo_mvd.svg"
        width="120"
        height="120"
      />
      <Typography variant={"h3"} className={`ms-5`}>
        МИНИСТЕРСТВО ВНУТРЕННИХ ДЕЛ <br /> КЫРГЫЗСКОЙ РЕСПУБЛИКИ
      </Typography>
    </div>
  );
}
