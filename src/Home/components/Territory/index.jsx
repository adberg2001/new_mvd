import React, { useState } from "react";
import cls from "./Territory.module.scss";
import Map from "./Map";

import axios from "axios";
import { BASE_URL } from "../../../../api/api";

const TerritorySection = ({ initialRegion }) => {
  const [fetchedRegion, setFetchedRegion] = useState(null);

  const onRegionChange = async (e) => {
    console.log(e.target.id);

    switch (e.target.id) {
      // Bishkek
      case "KGZ1115": {
        const { data } = await axios.get(`${BASE_URL}/regions/1`);
        setFetchedRegion(data);
        break;
      }
      // Chuy
      case "KGZ1116": {
        const { data } = await axios.get(`${BASE_URL}/regions/1`);
        setFetchedRegion(data);
        break;
      }
      case "KGZ1122": {
        const { data } = await axios.get(`${BASE_URL}/regions/2`);
        setFetchedRegion(data);
        break;
      }
      case "KGZ1120": {
        const { data } = await axios.get(`${BASE_URL}/regions/5`);
        setFetchedRegion(data);
        break;
      }
      case "KGZ1119": {
        const { data } = await axios.get(`${BASE_URL}/regions/4`);
        setFetchedRegion(data);
        break;
      }
      case "KGZ1117": {
        const { data } = await axios.get(`${BASE_URL}/regions/7`);
        setFetchedRegion(data);
        break;
      }
      case "KGZ1118": {
        const { data } = await axios.get(`${BASE_URL}/regions/6`);
        setFetchedRegion(data);
        break;
      }
      case "KGZ1121": {
        const { data } = await axios.get(`${BASE_URL}/regions/3`);
        setFetchedRegion(data);
        break;
      }
    }
  };

  const data = fetchedRegion ?? initialRegion;
  const {
    name,
    email,
    phone,
    address,
    facebook,
    instagram,
    twitter,
    telegram,
    website,
  } = data;

  return (
    <section className={["container", "section"].join(" ")}>
      <h2 className={"section__heading"}>
        Территориальные органы внутренних дел
      </h2>

      <div className={"d-flex flex-column align-items-center flex-lg-row"}>
        <Map onRegionChange={onRegionChange} />

        <div className={cls.mapInfo}>
          <h4>{name}</h4>

          <ul>
            <li>
              <p>Телефон</p>
              <p>{phone}</p>
            </li>

            <li>
              <p>Email</p>
              <p>{email}</p>
            </li>

            <li>
              <p>Адрес</p>
              <p>{address}</p>
            </li>

            <li>
              <p>Социальные сети</p>

              <div className={"d-flex flex-column"}>
                <a href={facebook}>Facebook</a>
                <a href={instagram}>Instagram</a>
                <a href={twitter}>Twitter</a>
                <a href={telegram}>Telegram</a>
                <a href={website}>Веб-сайт</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TerritorySection;
