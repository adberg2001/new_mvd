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
            width={"435"}
            height={"243"}
            objectFit={"contain"}
          />
          <Image
            src="/images/rubrics/children1.png"
            alt="children1.png"
            width={"436"}
            height={"293"}
            objectFit={"contain"}
          />
        </div>

        <div className={[cls.container__rubrics__col].join(" ")}>
          <Image
            src="/images/rubrics/proekty_norma1.png"
            alt="proekty_norma1.png"
            width={"400"}
            height={"192"}
            objectFit={"contain"}
          />

          <Image
            width={"400"}
            height={"96"}
            src="/images/rubrics/koomru1.png"
            alt="koomru1.png"
            objectFit={"contain"}
          />

          <Image
            width={"400"}
            height={"229"}
            src="/images/rubrics/proekty_norma2.png"
            alt="proekty_norma2.png"
            objectFit={"contain"}
          />
        </div>

        <div className={[cls.container__rubrics__col].join(" ")}>
          <Image
            width={"400"}
            height={"159"}
            src="/images/rubrics/mobapp11.png"
            alt="mobapp11.png"
            objectFit={"contain"}
          />

          <Image
            width={"400"}
            height={"197"}
            src="/images/rubrics/DB1.png"
            alt="DB1.png"
            objectFit={"contain"}
          />

          <Image
            width={"400"}
            height={"159"}
            src="/images/rubrics/mobapp12.png"
            alt="mobapp12.png"
            objectFit={"contain"}
          />
        </div>
      </div>
    </section>
  );
}
