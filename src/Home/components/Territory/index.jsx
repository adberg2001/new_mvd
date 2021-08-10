import React from "react";
import cls from "./Territory.module.scss";
import Map from "./Map";

const TerritorySection = () => {
  return (
    <section className={["container", "section"].join(" ")}>
      <h2 className={"section__heading"}>
        Территориальные органы внутренних дел
      </h2>

      <div className={"d-flex flex-column align-items-center flex-lg-row"}>
        <Map />

        <div className={cls.mapInfo}>
          <h4>Иссык-Кульская область</h4>

          <ul>
            <li>
              <p>Телефон</p>
              <p>021312312312</p>
            </li>

            <li>
              <p>Email</p>
              <p>marat_99@gmail.com</p>
            </li>

            <li>
              <p>Адрес</p>
              <p>lorem ipsum участок</p>
            </li>

            <li>
              <p>Социальные сети</p>

              <div className={"d-flex flex-column"}>
                <a>Facebook</a>
                <a>Instagram</a>
                <a>Twitter</a>
                <a>issyk-kul.mvd.kg</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TerritorySection;
