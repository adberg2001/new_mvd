import React from 'react';
import cls from './GlobalComponents.module.scss';
import Link from 'next/link';

export default function BaseSheetRow({ id, title }) {
  return (
    <li
      className={`${cls.base_sheet_row} d-flex flex-column flex-md-row justify-content-between`}
    >
      <Link href={`/normative-base/${id}`}>
        <a>{title}</a>
      </Link>
      <div className={cls.views}>{`Просмотров: ${2000}`}</div>
    </li>
  );
}
