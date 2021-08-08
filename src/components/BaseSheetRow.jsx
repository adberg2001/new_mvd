import React from "react";
import cls from "./GlobalComponents.module.scss";
import Link from "next/link"

export default function BaseSheetRow({id, label, viewsCount}){
  return (
    <li className={`${cls.base_sheet_row} d-flex justify-content-between`}>
      <p className={`m-0`}>{label}</p>
      <Link href={`/vacancies/${id}`} passHref>
        <button>{`Просмотров: ${viewsCount}`}</button>
      </Link>
    </li>
  )
}
