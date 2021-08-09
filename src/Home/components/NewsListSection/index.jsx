import React from "react";
import NewsList from "../NewsList";
import cls from "./NewsListSection.module.scss";
import NewsCalendar from "../NewsCalendar";
import Galleries from "../Galleries";
import { Button } from "@material-ui/core";

export default function NewsListSection() {
  return (
    <section className={[cls.section, "container"].join(" ")}>
      <h2 className={"section__heading"}>Важные новости</h2>
      <div className={cls.contentWrapper}>
        <NewsList />
        <div className="d-flex flex-column mt-5 ml-2">
          <NewsCalendar />
          <Galleries />
        </div>
      </div>
      {/*<Button color="primary" variant="contained">*/}
      {/*  Еще*/}
      {/*</Button>*/}
    </section>
  );
}
