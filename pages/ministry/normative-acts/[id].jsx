import React from 'react';
import Layout from '../../../src/Layout/Layout';
import axios from 'axios';
import { BASE_URL } from '../../../api/api';

export async function getServerSideProps({ query: { id } }) {
  const { data } = await axios.get(`${BASE_URL}/normative_base_projects/${id}`);

  return {
    props: {
      normativeAct: data,
    },
  };
}

export default function NormativeActDetail({ normativeAct }) {
  return (
    <Layout>
      <section className={`container StaticContentMain`}>
        <div>
          <h1>{normativeAct.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: normativeAct.content,
            }}
          />
        </div>
      </section>
    </Layout>
  );
}
