import Layout from "../../src/Layout/Layout";
import axios from "axios";
import {BASE_URL} from "../../api/api";
import AnticorruptionalPoliticComp from "../../src/AnticorruptionalPolitic";


export async function getServerSideProps() {
  const {
    data: { results },
  } = await axios.get(`${BASE_URL}/anticorruptional-politic/`);

  return {
    props: {
      anticorruptional_politic: results,
    },
  };
}

export default function AnticorruptionalPolitic({anticorruptional_politic}){

  return (
    <Layout>
      <AnticorruptionalPoliticComp anticorruptional_politic={anticorruptional_politic}/>
    </Layout>
  )
}
