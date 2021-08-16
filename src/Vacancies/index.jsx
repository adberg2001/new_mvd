import React from 'react';
import cls from './Vacancies.module.scss';
import Pagination from '@material-ui/lab/Pagination';
import NormativeList from '../components/Normative/NormativeList';

const vacancies = [
  {
    id: 'vacancies-1',
    title: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-2',
    title: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-3',
    title: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-4',
    title: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-5',
    title: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-6',
    title: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-7',
    title: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-8',
    title: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-9',
    title: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-11',
    title: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-12',
    title: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-13',
    title: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-14',
    title: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-15',
    title: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-16',
    title: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-17',
    title: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-18',
    title: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
  {
    id: 'vacancies-19',
    title: 'Lorem ipsum dolor sit amment adnasdhn absdjabsda bhjabsd',
    viewsCount: '2000',
  },
];

export default function VacanciesComponent() {
  return (
    <section className={`${cls.main} container`}>
      <h1 className={'section__heading'}>Вакансии</h1>
      <NormativeList dataList={vacancies} />

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
