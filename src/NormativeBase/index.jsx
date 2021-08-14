import React from 'react';
import cls from './NormativeBase.module.scss';
import BaseSheetRow from '../components/components/BaseSheetRow';
import Pagination from '@material-ui/lab/Pagination';

export default function NormativeBaseComponent({ normativeBases }) {
  return (
    <section className={`${cls.main} container`}>
      <div className={cls.head}>
        <h2 className={'section__heading'}>Нормативная база</h2>
        <p>
          ЦЕНТРАЛИЗОВАННЫЙ БАНК ДАННЫХ <br />
          ПРАВОВОЙ ИНФОРМАЦИИ <br />
          КЫРГЫЗСКОЙ РЕСПУБЛИКИ
        </p>
      </div>
      <ul className={cls.normativeBase}>
        {normativeBases.map((base) => (
          <BaseSheetRow key={base.id} {...base} />
        ))}
      </ul>

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
