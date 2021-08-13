import React from 'react';
import Layout from '../src/Layout/Layout';
import axios from 'axios';
import { BASE_URL } from '../api/api';
import Management from '../src/Management';

export async function getServerSideProps() {
  const {
    data: { results: links },
  } = await axios.get(`${BASE_URL}/links`);

  const {
    data: { results: management },
  } = await axios.get(`${BASE_URL}/management`);

  const orderedManagement = management.sort(
    (staff1, staff2) => staff1.order - staff2.order
  );

  return {
    props: {
      links,
      management: orderedManagement,
    },
  };
}

export default function ManagementPage({ links, management }) {
  return (
    <Layout links={links}>
      <Management management={management} />
    </Layout>
  );
}
