import React from 'react';
import Layout from '../../src/Layout/Layout';
import axios from 'axios';
import { BASE_URL } from '../../api/api';

export async function getServerSideProps() {
  const {
    data: { results },
  } = await axios.get(`${BASE_URL}/history`);

  return {
    props: {
      historyContent: results[0],
    },
  };
}

export default function History({ historyContent }) {
  return (
    <Layout>
      <section className={`container StaticContentMain`}>
        <div>
          <h3>ИСТОРИЯ</h3>

          <div
            className={'History'}
            dangerouslySetInnerHTML={{
              __html: historyContent.content,
            }}
          />
        </div>
      </section>
    </Layout>
  );
}
