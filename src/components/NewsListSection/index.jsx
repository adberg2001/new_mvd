import React, { useState } from "react";
import NewsList from "../NewsList";
import cls from "./NewsListSection.module.scss";
import NewsCalendar from "../NewsCalendar";
import Galleries from "../../Home/components/Galleries";
import axios from "axios";
import { BASE_URL } from "../../../api/api";
import { formatDate } from "../../../utils/utils";

export default function NewsListSection({ last_news, title }) {
  const [touched, setTouched] = useState(false);

  const [filtratedNews, setFiltratedNews] = useState([]);
  const { results } = last_news;

  const onCalendarChange = async (_date) => {
    !_date && setTouched(false);
    const formattedDate = formatDate(_date, "obj");
    const d = formattedDate.d.toString().padStart(2, "0");
    const m = formattedDate.m.toString().padStart(2, "0");
    const y = formattedDate.y;

    const _api = _date
      ? `${BASE_URL}/news/?created=${y}-${m}-${d}`
      : `${BASE_URL}/news`;
    const {
      data: { results },
    } = await axios.get(_api);

    setFiltratedNews(results);
  };

  return (
    <section className={[cls.section, "container", "section"].join(" ")}>
      <h2 className={"section__heading"}>{title}</h2>
      <div className={cls.contentWrapper}>
        <NewsList news={touched ? filtratedNews : results} />
        <div className="d-flex flex-column mt-5 ml-2">
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
