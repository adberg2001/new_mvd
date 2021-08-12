import React  from 'react';
import cls from './Vacancies.module.scss';
import BaseSheetRow from '../components/components/BaseSheetRow';
import Pagination from '@material-ui/lab/Pagination';

const vacancies = [
  {
    id: 'vacancies-1',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-2',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-3',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-4',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-5',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-6',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-7',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-8',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-9',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-11',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-12',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-13',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-14',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-15',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-16',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-17',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-18',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-19',
    label: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
];

export default function VacanciesComponent() {

  return (
    <section className={`${cls.main} container`}>
      <div className={cls.head}>
        <h2 className={'section__heading'} style={{ marginBottom: 0 }}>
          Вакансии
        </h2>
      </div>
      <ul className={cls.vacancies}>
        {vacancies.map((vacancy) => (
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
