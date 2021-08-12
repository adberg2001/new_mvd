import React  from 'react';
import cls from './NormativeBase.module.scss';
import BaseSheetRow from '../components/components/BaseSheetRow';
import Pagination from '@material-ui/lab/Pagination';

const normativeBase = [
  {
    id: 'normative-base-1',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'normative-base-2',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'normative-base-3',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'normative-base-4',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'normative-base-5',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'normative-base-6',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'normative-base-7',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'normative-base-8',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'normative-base-9',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'normative-base-11',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'normative-base-12',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'normative-base-13',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'normative-base-14',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'normative-base-15',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'normative-base-16',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'normative-base-17',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'normative-base-18',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'normative-base-19',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
];

export default function NormativeBaseComponent() {

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
        {normativeBase.map((vacancy) => (
          <BaseSheetRow key={vacancy.id} {...vacancy} />
        ))}
      </ul>

      <Pagination
        color="primary"
        size="large"
        page={1}
        count={3}
        className={cls.Pagination}
      />
    </section>
  );
}
