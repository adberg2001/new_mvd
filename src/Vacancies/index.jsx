import React, {useState} from "react";
import cls from "./Vacancies.module.scss";
import BaseSheetRow from "../components/BaseSheetRow";

const vacancies = [
  {id: "vacancies-1", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "vacancies-2", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "vacancies-3", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "vacancies-4", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "vacancies-5", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "vacancies-6", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "vacancies-7", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "vacancies-8", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "vacancies-9", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "vacancies-11", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "vacancies-12", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "vacancies-13", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "vacancies-14", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "vacancies-15", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "vacancies-16", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "vacancies-17", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "vacancies-18", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "vacancies-19", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
]

export default function VacanciesComponent() {
  const [activePag, setActivePag] = useState('1')

  return (
    <section className={`${cls.main} container`}>
      <div className={cls.head}>
        <h2 className={'sections__heading'}>Вакансии</h2>
      </div>
      <ul className={cls.vacancies}>
        {vacancies.map(vacancy => <BaseSheetRow key={vacancy.id} {...vacancy}/>)}
        <li style={{gridGap: 10}} className={`pagination d-flex justify-content-center align-items-center`}>
          <button
            onClick={() => setActivePag('1')} className={`${activePag === "1" ? 'active' : ""}`}
          >
            1
          </button>
          <button
            onClick={() => setActivePag('2')} className={`${activePag === "2" ? 'active' : ""}`}
          >
            2
          </button>
          <button
            onClick={() => setActivePag('3')} className={`${activePag === "3" ? 'active' : ""}`}
          >
            3
          </button>
        </li>
      </ul>
    </section>
  )
}
