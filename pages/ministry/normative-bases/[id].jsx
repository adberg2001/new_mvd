import React from 'react';
import Layout from '../../../src/Layout/Layout';
import axios from 'axios';
import { BASE_URL } from '../../../api/api';

export async function getServerSideProps({ query: { id } }) {
  const { data } = await axios.get(`${BASE_URL}/normative_base_projects/${id}`);

  return {
    props: {
      normativeBase: data,
    },
  };
}

export default function NormativeBaseDetail({ normativeBase }) {
  return (
    <Layout>
      <section className={`container StaticContentMain`}>
        <div>
          <h1>{normativeBase.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: normativeBase.content,
            }}
          />
        </div>
      </section>
    </Layout>
  );
}
