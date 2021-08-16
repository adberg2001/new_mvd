import React from 'react';
import cls from './Normative.module.scss';
import Link from 'next/link';

export default function NormativeList({ dataList, linkBase }) {
  return (
    <ul className={cls.normativeBase}>
      {dataList.map(({ id, title, views }) => (
        <li
          key={id}
          className={`${cls.normativ} d-flex flex-column flex-md-row justify-content-between`}
        >
          <Link href={`${linkBase}/${id}`}>
            <a>{title}</a>
          </Link>
          <div className={cls.views}>{`Просмотров: ${2000}`}</div>
        </li>
      ))}
    </ul>
  );
}
