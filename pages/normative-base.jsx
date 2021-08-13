import Layout from '../src/Layout/Layout';
import NormativeBaseComponent from '../src/NormativeBase';
import axios from 'axios';
import { BASE_URL } from '../api/api';

export async function getServerSideProps() {
  const {
    data: { results: links },
  } = await axios.get(`${BASE_URL}/links`);

  return {
    props: {
      links,
    },
  };
}

export default function Vacancies({ links }) {
  return (
    <Layout links={links}>
      <NormativeBaseComponent />
    </Layout>
  );
}
