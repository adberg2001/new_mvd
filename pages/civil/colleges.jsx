import Layout from "../../src/Layout/Layout";
import axios from "axios";
import CollagesComponent from "../../src/Collages";
import { BASE_URL } from "../../api/api";

export async function getServerSideProps() {
  const {
    data: { results },
  } = await axios.get(`${BASE_URL}/colleges/`);

  return {
    props: {
      colleges: results,
    },
  };
}

export default function Colleges({ colleges }) {
  return (
    <Layout>
      <CollagesComponent colleges={colleges} />
    </Layout>
  );
}
