import Layout from "../../src/Layout/Layout";
import axios from "axios";
import {BASE_URL} from "../../api/api";
import CollagesComponent from "../../src/Collages";


export async function getServerSideProps() {
  const {
    data: { results },
  } = await axios.get(`${BASE_URL}/colleges/`);

  return {
    props: {
      collages: results,
    },
  };
}

export default function Collages({collages}){

  return (
    <Layout>
      <CollagesComponent collages={collages}/>
    </Layout>
  )
}
