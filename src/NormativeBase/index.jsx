import React, {useState} from "react";
import cls from "./NormativeBase.module.scss";
import BaseSheetRow from "../components/BaseSheetRow";

const normativeBase = [
  {id: "normative-base-1", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "normative-base-2", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "normative-base-3", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "normative-base-4", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "normative-base-5", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "normative-base-6", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "normative-base-7", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "normative-base-8", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "normative-base-9", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "normative-base-11", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "normative-base-12", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "normative-base-13", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "normative-base-14", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "normative-base-15", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "normative-base-16", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "normative-base-17", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "normative-base-18", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
  {id: "normative-base-19", label: "Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd", viewsCount: "2000"},
]

export default function NormativeBaseComponent() {
  const [activePag, setActivePag] = useState('1')

  return (
    <section className={`${cls.main} container`}>
      <div className={cls.head}>
        <h2 className={'sections__heading'}>Нормативная база</h2>
        <p>
          ЦЕНТРАЛИЗОВАННЫЙ БАНК ДАННЫХ <br/>
          ПРАВОВОЙ ИНФОРМАЦИИ <br/>
          КЫРГЫЗСКОЙ РЕСПУБЛИКИ
        </p>
      </div>
      <ul className={cls.normativeBase}>
        {normativeBase.map(vacancy => <BaseSheetRow key={vacancy.id} {...vacancy}/>)}
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
