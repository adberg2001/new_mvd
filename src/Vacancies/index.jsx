import React from "react";
import cls from "./Vacancies.module.scss";
import Pagination from "@material-ui/lab/Pagination";
import NormativeList from "../components/Normative/NormativeList";

export default function VacanciesComponent({ vacancies }) {
  return (
    <section className={`${cls.main} container`}>
      <h1 className={"section__heading"}>Вакансии</h1>
      <NormativeList linkBase={"/civil/vacancies"} dataList={vacancies} />

      {/* <Pagination
        color="primary"
        size="large"
        page={1}
        count={3}
        className={cls.Pagination}
      /> */}
    </section>
  );
}
