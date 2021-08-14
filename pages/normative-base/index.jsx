import Layout from '../../src/Layout/Layout';
import NormativeBaseComponent from '../../src/NormativeBase';
import axios from 'axios';
import { BASE_URL } from '../../api/api';

export async function getServerSideProps() {
  const {
    data: { results: links },
  } = await axios.get(`${BASE_URL}/links`);

  const {
    data: { results: normativeBases },
  } = await axios.get(`${BASE_URL}/normative_bases`);

  return {
    props: {
      links,
      normativeBases,
    },
  };
}

export default function Vacancies({ links, normativeBases }) {
  return (
    <Layout links={links}>
      <NormativeBaseComponent normativeBases={normativeBases} />
    </Layout>
  );
}
