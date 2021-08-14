import axios from 'axios';
import React from 'react';
import { BASE_URL } from '../api/api';
import Layout from '../src/Layout/Layout';

export async function getServerSideProps() {
  const {
    data: { results },
  } = await axios.get(`${BASE_URL}/gender-politic`);

  return {
    props: {
      genderPolicy: results,
    },
  };
}

export default function GenderPolicy({ genderPolicy }) {
  return (
    <Layout>
      <section className={`container StaticContentMain`}>
        <div>
          <h3>Гендарная Политика</h3>
          <ul>
            {genderPolicy.map((policy) => (
              <li key={policy.id}>
                <a href={`${policy.file}`} download>
                  {policy.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
