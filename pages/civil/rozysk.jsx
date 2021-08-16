import axios from 'axios';
import React from 'react';
import { BASE_URL } from '../../api/api';
import Layout from '../../src/Layout/Layout';
import WantedList from '../../src/staticComponents/WantedList';

export async function getServerSideProps() {
  const {
    data: { results },
  } = await axios.get(`${BASE_URL}/wanted`);

  return {
    props: {
      wantedList: results,
    },
  };
}

export default function Rozysk({ wantedList }) {
  return (
    <Layout>
      <section className={`container StaticContentMain`}>
        <div>
          <h1>
            СПИСОК НЕ НАЙДЕННЫХ БЕЗ ВЕСТИ ПРОПАВШИХ НЕСОВЕРШЕННОЛЕТНИХ ЛИЦ,
            НАХОДЯЩИЕСЯ В РОЗЫСКЕ
          </h1>

          <WantedList wantedList={wantedList} />
        </div>
      </section>
    </Layout>
  );
}
