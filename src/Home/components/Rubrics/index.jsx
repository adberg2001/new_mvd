import React from "react";
import cls from "./Rubrics.module.scss";
import Image from "next/image";

export default function Rubrics() {
  return (
    <section className={[cls.container, "container", "section"].join(" ")}>
      <h2 className={"section__heading"}>Рубрики</h2>

      <div className={[cls.container__rubrics].join(" ")}>
        <div className={[cls.container__rubrics__col].join(" ")}>
          <Image
            src="/images/rubrics/normativ1.png"
            alt="normativ1.png"
            layout="fill"
          />
          <Image
            src="/images/rubrics/children1.png"
            alt="children1.png"
            layout="fill"
          />
        </div>
        <div className={[cls.container__rubrics__col].join(" ")}>
          <Image
            src="/images/rubrics/proekty_norma1.png"
            alt="proekty_norma1.png"
            layout="fill"
          />
          <Image
            src="/images/rubrics/koomru1.png"
            alt="koomru1.png"
            layout="fill"
          />
          <Image
            src="/images/rubrics/mobapp12.png"
            alt="mobapp12.png"
            layout="fill"
          />
        </div>
        <div className={[cls.container__rubrics__col].join(" ")}>
          <Image
            src="/images/rubrics/mobapp11.png"
            alt="mobapp11.png"
            layout="fill"
          />
          <Image src="/images/rubrics/DB1.png" alt="DB1.png" layout="fill" />
          <Image
            src="/images/rubrics/proekty_norma2.png"
            alt="proekty_norma2.png"
            layout="fill"
          />
        </div>
      </div>
    </section>
  );
}
