import React, { useState } from "react";
import NewsList from "../NewsList";
import cls from "./NewsListSection.module.scss";
import NewsCalendar from "../NewsCalendar";
import Galleries from "../Galleries";
import axios from "axios";
import { BASE_URL } from "../../../../api/api";

export default function NewsListSection({ last_news }) {
  const [touched, setTouched] = useState(false);

  const [filtratedNews, setFiltratedNews] = useState([]);
  const { results } = last_news;

  const onCalendarChange = async (_date) => {
    const d = `${_date.getDate().toString().padStart(2, "0")}`;
    const m = `${(_date.getMonth() + 1).toString().padStart(2, "0")}`;
    const y = _date.getFullYear();
    const {
      data: { results },
    } = await axios.get(`${BASE_URL}/news/?created=${y}-${m}-${d}`);
    setFiltratedNews(results);
    console.log(`${BASE_URL}/news/?created=${y}-${m}-${d}`);
  };

  return (
    <section className={[cls.section, "container", "section"].join(" ")}>
      <h2 className={"section__heading"}>Важные новости</h2>
      <div className={cls.contentWrapper}>
        <NewsList news={touched ? filtratedNews : results} />
        <div className="d-flex flex-column mt-0 mt-xl-5 ml-2">
          <NewsCalendar
            touched={touched}
            setTouched={setTouched}
            onCalendarChange={onCalendarChange}
          />
          <Galleries />
        </div>
      </div>
    </section>
  );
}
